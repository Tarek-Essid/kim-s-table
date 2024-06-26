// require mongoose
const mongoose = require("mongoose");

// create dataBase
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connect . . .");
  } catch (error) {
    console.log("can not connect to database !");
  }
};

// exports
module.exports = connectDB;
