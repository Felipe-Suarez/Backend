import express from 'express'
import router from './src/routes/routes.js'

import MongoStore from 'connect-mongo';
import session from 'express-session';

import passport from 'passport';
import cookieParser from 'cookie-parser';

import compression from 'compression'

import { Server as HttpServer } from 'http'
import { Server as IOServer } from 'socket.io'

import { chatDao } from './src/persistence/daos/index.js';

import logger from './utils/logger.js'

import { URL_MONGO, SECRET, PORT, NODE_ENV, MAX_AGE } from './config/index.js'

import { useDB } from './src/persistence/daos/index.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import cluster from 'cluster'
// import CPUs from 'os'
// const numCPUs = CPUs.cpus().length

// if (cluster.isPrimary) {
//     logger.info("num CPUs: " + numCPUs);
//     logger.info(`I am a master ${process.pid}`);

//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
//     cluster.on("exit", (worker) => {
//         logger.info(`${worker.process.pid} is finished`);
//     });

// } else {

//init
const app = express();

//compression gzip
app.use(compression({ filter: shouldCompress }))
function shouldCompress(req, res) {

    // don't compress responses with this request header
    if (req.headers['x-no-compression']) { return false }

    // fallback to standard filter function
    return compression.filter(req, res)
}

//cookies & session
app.use(cookieParser());

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

app.use(
    session({
        store: new MongoStore({
            mongoUrl: URL_MONGO,
            mongoOptions: options
        }),
        secret: SECRET,
        resave: true,
        saveUninitialized: true,
        rolling: true,
        cookie: { maxAge: Number(MAX_AGE) }
    })
);

app.use(passport.initialize());
app.use(passport.session());

//ejs
app.set('views', './src/views');
app.set('view engine', 'ejs')

//middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)

// SOCKET
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

io.on('connection', async function (socket) {
    logger.info('Usuario conectado');

    const messages = await chatDao.list();
    socket.emit('messages', messages)

    socket.on('new-message', async function (data) {
        try {
            chatDao.save(data)
            const messages = await chatDao.list()
            io.sockets.emit('messages', messages)
        } catch (err) {
            logger.error(err)
        }
    })
    socket.on('disconnect', () => {
        logger.info('Usuario desconectado');
    });
})

let usePort = process.env.PORT || 8080
// if (NODE_ENV === 'prod') usePort = PORT
// else usePort = 8080

//listen
httpServer.listen(usePort, () => logger.info(`Escuchando al puerto ${usePort}. Utilizando ${useDB}`))
httpServer.on('error', (err) => logger.error(err))
// }