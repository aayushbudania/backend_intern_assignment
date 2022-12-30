import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productsRoute from "./routes/products.js";

const app = express();
dotenv.config();

const connect = async() => {
    try {
            await mongoose.connect(process.env.MONGO);
            console.log("Connected to Database.");
          } catch (error) {
            throw error;
    }
}

mongoose.set("strictQuery", false);

mongoose.connection.on('disconnected', () => {
    console.log("Database disconnected.");
})

app.use('products', productsRoute);

app.listen(8800, () => {
    connect();
    console.log("Connected to server");
})