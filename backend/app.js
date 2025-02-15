// Importing packages
const express = require("express");
const bodyParser = require("body-parser"); // If needed for URL-encoded data
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require('helmet'); // Add this package
require("colors");

// Initializing app
const app = express();

// Configurations
dotenv.config({ path: "backend/config/config.env" });

// Global Middleware
app.use(helmet()); // Enhanced security middleware
app.use(express.json({ limit: '10mb' })); // For JSON data
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // For URL-encoded data, if needed
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "Authorization",
        "Access-Control-Allow-Credentials"
    ],
}));

// Add request timeout
app.use((req, res, next) => {
    req.setTimeout(30000, () => {
        res.status(408).send('Request Timeout');
    });
    next();
});

// Error Handling for Uncaught Exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error : ${err.message}`.underline.bgRed);
    console.log(`Error : ${err.stack}`.underline.bgYellow);
    console.log(`Shutting Down the server due to uncaughtException`.underline.bgMagenta.bold);
    process.exit(1);
});

// Exporting app
module.exports = app;
