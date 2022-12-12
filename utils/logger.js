import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.combine(winston.format.simple(),
        winston.format.colorize(),
        winston.format.printf(info => `[${(new Date).toLocaleDateString()} - (${(new Date).toLocaleTimeString()})]/(Level: ${info.level}): ${info.message}`)
    ),
    transports: [
        new winston.transports.File({ filename: "./logs/warn.log", level: "warn" }),
        new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
        new winston.transports.Console({ level: "info" }),
    ]
})

export default logger;