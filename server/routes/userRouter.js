const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/login', (req, res)=>{
  const id = [req.body.password, req.body.username];
  const sqlQuery = `SELECT * FROM user
                    WHERE password = $1 AND username = $2;`;
  pool.query(sqlQuery, id)
  .then(result=>result.rows[0])
  .catch(error=>{
    console.log('Error in /login GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;