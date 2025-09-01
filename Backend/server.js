import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import chatRoutes from "./routes/chat.js";
// App config-

const app = express();
connectDB();
connectCloudinary();

// middleware-
app.use(express.json());
app.use(cors());

// api endpoints-
app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.use("/api/chat", chatRoutes);

app.get("/",(req,res)=>{
    res.send("Api working is Good-")
})

// server start-
app.listen(4000,()=>{
    console.log("server started on PORT No is 4000:" );
})