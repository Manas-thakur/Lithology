const mongoose = require("mongoose");
require("colors");
const connectionMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `DataBase(${conn.connection.name}) is Connected to Server ${process.env.PORT} and ${conn.connection.host}:${conn.connection.port}`
        .underline.bgBlue
    );
  } catch (error) {
    console.log(`Error Occured : ${error.message}`.underline.bgRed);
  }
};
module.exports = connectionMongoDb;
