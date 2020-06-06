const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res)=>{
  const id = [req.params.id];
  const sqlQuery = `SELECT date, mood FROM chart
                    WHERE user_id = $1;`;
  pool.query(sqlQuery, id)
  .then(result=>res.send(result.rows))
  .catch(error=>{
    console.log('Error in /:id GET', error);
    res.sendStatus(500);
  });
});

module.exports = router;