const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res)=>{
  const id = [req.params.id];
  const sqlQuery = `SELECT * FROM tracker
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(result=>res.send(result.rows[0]))
  .catch(error=>{
    console.log('Error in / GET', error);
    res.sendStatus(500);
  });
});

router.put('/', (req, res)=>{
  console.log('req bdy -----------------------------', req.body);
  const id = [req.body.id, req.body.food, req.body.movement, req.body.sleep, req.body.therapy];
  const sqlQuery = `UPDATE tracker
                    SET food = $2, movement = $3, sleep = $4, therapy = $5
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(200))
  .catch(error=>{
    console.log('Error in / PUT', error);
    res.sendStatus(500);
  });
});

module.exports = router;