const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MSSQL Database
connectDB();

// Routes
app.use("/", require("./routes/home"));
// app.use("/about", require("./routes/about"));
// app.use("/contact", require("./routes/contact"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
