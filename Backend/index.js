const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes")
const path = require("path");
const cors = require("cors");
dotenv.config();
const app = express();  // it create application Server

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Error:", error.message);
    });
app.use(cors())

    
app.use(express.json());
app.use("/api", authRoutes)

app.use("/uploads",express.static(path.join(__dirname, "uploads")));


// Server Start
app.listen(process.env.PORT, () => {
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
});