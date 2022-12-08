import express from 'express'
import router from './src/routes/routes.js'

import MongoStore from 'connect-mongo';
import session from 'express-session';

import passport from 'passport';
import cookieParser from 'cookie-parser';

import compression from 'compression'

import logger from './utils/logger.js'

import { URL_MONGO, SECRET, PERS } from './config/index.js'

import { useDB } from './src/persistence/daos/index.js';

import cluster from 'cluster'
import CPUs from 'os'
const numCPUs = CPUs.cpus().length

//clusters
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
        cookie: { maxAge: 600000 }
    })
);

app.use(passport.initialize());
app.use(passport.session());

//ejs
app.set('views', './src/views');
app.set('view engine', 'ejs')

//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)

//port
const PORT = process.env.PORT || 8080;

//listen
const server = app.listen(PORT, () => logger.info(`Escuchando al puerto ${PORT}. Utilizando ${useDB}`))
server.on('error', (err) => logger.error(err))
// }