const express = require("express");
const movies = require("./routes/movies");
require("dotenv/config");
const mongoose = require("mongoose");


const app = express();


// app middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// middleware for routes
app.use("/movies", movies)


// mongoDB connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connection to DB established");
})

app.listen(5000, () => {
    console.log("Server running on port 5000...");
})