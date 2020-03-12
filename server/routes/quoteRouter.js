const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
  const sqlQuery = `SELECT * FROM quote 
                    ORDER BY random() 
                    LIMIT 1;`;
  pool.query(sqlQuery)
  .then(result=>res.send(result.rows[0]))
  .catch(error=>{
    console.log('Error in / GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;