import express from 'express';
import dotenv from "dotenv"
import Connection from './database/db.js';
import router from './routes/router.js'
import cors from "cors"

const app=express();
dotenv.config();
app.use(cors());
app.use(`/`,router)

const username=process.env.DBUSERNAME
const password=process.env.DBPASSWORD
const PORT=8000;

Connection(username, password)


app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)})



