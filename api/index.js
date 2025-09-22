// api/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("../db"); // one level up
const homeRoutes = require("../routes/home");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MSSQL
connectDB();

// Routes
app.use("/", homeRoutes);

// Export for Vercel
module.exports = app;
