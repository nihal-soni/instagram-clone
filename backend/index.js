import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import jwt from "jsonwebtoken"
import connectDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config({});
const app = express();


app.get("/", (req, res) => {
    return res.status(200).json({
      message:"this message is from backend ",
      success: true
    })
})


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended: true}));

const corsOptions = {
    origin: 'http://localhost:5173',
    Credential: true
}


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    connectDB ();
    console.log(`server is started at port ${PORT}`)
})