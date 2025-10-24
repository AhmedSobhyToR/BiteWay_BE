const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MSSQL
connectDB();

// Routes
// Example route:
app.get("/", (req, res) => {
  res.send("Server is running locally 🚀");
});

const homeRoutes = require("./routes/home");
app.use(homeRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
