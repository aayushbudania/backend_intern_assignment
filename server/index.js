import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRoute from "./routes/products.js";

dotenv.config();
const app = express();

const connect = async() => {
    try {
            await mongoose.connect(process.env.MONGO);
            console.log("Connected to Database.");
          } catch (error) {
            throw error;
    }
}

// MIDDLEWARES

app.use(express.json());

app.use('/products', productsRoute);

app.use((err, req, res, next) => {
    return res.status(500).send(err);
})

mongoose.set('strictQuery', false);

mongoose.connection.on('disconnected', () => {
    console.log("Database disconnected.");
})

app.listen(8800, () => {
    connect();
    console.log("Connected to server");
})