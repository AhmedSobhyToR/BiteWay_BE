const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
