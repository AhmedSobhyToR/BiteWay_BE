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
    FROM [db14020].[dbo].[Categories]`
    const result = await sql.query(query);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get(`${apiLink}${getTrendyProducts}`, async (req, res) => {
  try {
    const query = `SELECT * 
    FROM [db14020].[dbo].[Products]`
    const result = await sql.query(query);
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
