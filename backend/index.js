import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import jwt from "jsonwebtoken"
const app = express();
//middlewares
app.use(express.json());


const PORT = 8000
app.listen(PORT, () => {
    console.log(`server is started at port ${PORT}`)
})