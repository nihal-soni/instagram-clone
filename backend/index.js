import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    Credential: true
}
app.use(corsOptions)


const PORT = 8080;


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})