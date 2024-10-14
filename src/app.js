import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import router from "./routes/index.js";

import { errorHandle } from './errors/errHandle.js';
import { logger } from './utils/logger.js';


const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb+srv://admin:123@coder69930.uiaieqj.mongodb.net/adoptame`)

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

//MIDDLEWARE DE MANEJO DE ERRORES (lo ponemos luego de las rutas para que lo deribe a ese errorHandle)
app.use(errorHandle);

app.listen(PORT,()=>logger.info(`Listening on ${PORT}`));
