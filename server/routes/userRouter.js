const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/login', (req, res)=>{
  const id = [req.body.id, req.body.password];
  const sqlQuery = `SELECT * FROM user
                    WHERE id = $1 AND password = $2;`;
  pool.query(sqlQuery, id)
  .then(result=>result.rows)
  .catch(error=>{
    console.log('Error in /login GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;