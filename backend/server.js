// Importing modules
const app = require("./app");
const connectionMongoDb = require("./database/connDataBase");
const userRoutes = require("./routes/userRoutes");
const imageRoutes = require("./routes/imageRoutes");
const mlRoutes = require("./routes/machineLearningRoutes");
const errorMiddleWare = require("./middlewares/errorHandling");
require("colors");

// Database Connection
connectionMongoDb();

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/image", imageRoutes);
app.use("/api/v1/ml", mlRoutes);

// Error Handling Middleware
app.use(errorMiddleWare);

// Improved server shutdown handling
const server = app.listen(process.env.PORT, "localhost", () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`.underline.bgGreen);
});

// Handling Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`.underline.bgRed);
    console.log(`Shutting down the server due to unhandled promise rejection`.underline.bgMagenta.bold);
    server.close(() => {
        process.exit(1);
    });
});
