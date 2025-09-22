const sql = require("mssql");

let pool;

const connectDB = async () => {
  if (pool) return pool; // reuse existing pool
  try {
    pool = await sql.connect({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER,
      database: process.env.DB_NAME,
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    });
    console.log("✅ MSSQL Connected");
    return pool;
  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    throw err;
  }
};

module.exports = { connectDB, sql };
