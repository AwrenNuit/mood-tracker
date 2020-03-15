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
  const id = [req.body.id, req.body.food, req.body.meds, req.body.movement, req.body.pain, req.body.period, req.body.sleep, req.body.therapy, req.body.water];
  const sqlQuery = `UPDATE tracker
                    SET food = $2, meds = $3, movement = $4, pain = $5, period = $6, sleep = $7, therapy = $8, water = $9
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(200))
  .catch(error=>{
    console.log('Error in / PUT', error);
    res.sendStatus(500);
  });
});

module.exports = router;