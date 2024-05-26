// 1 require express
const express = require("express");

// require cors
const cors = require("cors");

// 2 Create instance
const app = express();

// 5 require dotenv
require("dotenv").config();

// 6 require connectDB
const connectDB = require("./config/connectDB");
connectDB();

// 7 routing
// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));

// 3 Create PORT
const PORT = process.env.PORT;

// 4 Create server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to the server ${error}!`)
    : console.log(`server is running PORT ${PORT} . . .`);
});
