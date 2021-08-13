console.clear();

// import express
const express = require("express");
const connectDB = require ("./config/connectDB");
const userRouter = require("./routes/User");
const productRouter = require("./routes/Product");
const orderRouter= require("./routes/Order")
const app = express();
// middelware
app.use(express.json());
//dotenv
require("dotenv").config();
const PORT= process.env.PORT

connectDB();

// routing
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order",orderRouter);

app.listen(PORT, (err) => {
    err
        ? console.error(err)
        : console.log(`server is connected on port ${PORT}`);
});