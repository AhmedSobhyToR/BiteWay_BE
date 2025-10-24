const express = require("express");
const router = express.Router();
const { sql } = require("../db");
const apiLink = '/api/v1'
const getCategories = '/getCategories'
const getTrendyProducts = '/getTrendyProducts'
// Example Route to Fetch Data from MSSQL
router.get(`${apiLink}${getCategories}`, async (req, res) => {
  try {
    const query = `SELECT * 
    FROM [db27852].[dbo].[Categories]`
    const result = await sql.query(query);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get(`${apiLink}${getTrendyProducts}`, async (req, res) => {
  try {
    const query = `SELECT * 
    FROM [db27852].[dbo].[Products]`
    const result = await sql.query(query);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get("/api/v1/hello", async (req, res) => {
    res.send("hello world");
});



module.exports = router;
