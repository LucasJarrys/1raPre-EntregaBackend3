import {createLogger, format, transports} from "winston";

const { combine, timestamp, printf, colorize } = format;

//formateo custom
const customFormat = printf(({level, message, timestamp}) =>{
    return `${timestamp} [${level}]: ${message}`;
});

export const logger = createLogger ( {
    level: "info", // NIVEL MINIMO DE LOG
    format: combine(
        colorize(),
        timestamp({ format: "YYYY-MM-DD HH:mm:ss"}),
        customFormat
    ),
    transports: [
        new transports.Console(), //SE EJECUTAN LOS LOGS EN NUESTRA CONSOLA 
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" })
    ]
} )