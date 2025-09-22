const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("../db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MSSQL
connectDB();

// Routes
app.use("/", require("../routes/home"));

module.exports = serverless(app);
