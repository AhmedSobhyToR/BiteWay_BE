const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // e.g., 'localhost' or an IP
  database: process.env.DB_NAME,
  options: {
    encrypt: true, // Use encryption if required
    trustServerCertificate: true, // Required for local dev
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log("✅ MSSQL Connected Successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
};

module.exports = { connectDB, sql };
