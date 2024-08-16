import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./db/config.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.status(200).send('Hello khaireddine');
})

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    ConnectDB();
    console.log(`server is running on port ${PORT}`);
})
