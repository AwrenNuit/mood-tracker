const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/:id', (req, res)=>{
  const id = [req.params.id];
  const sqlQuery = `SELECT * FROM chart
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(result=>res.send(result.rows[0]))
  .catch(error=>{
    console.log('Error in / GET', error);
    res.sendStatus(500);
  });
});

router.post('/', (req, res)=>{
  const id = [];
  for(let item in req.body) {
    id.push(req.body[item]);
  }
  const sqlQuery = `INSERT INTO chart (challenge, date, food, meds, mood, movement, pain, period, sleep, therapy, thoughts, water, user_id)
                    VALUES ($2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $1);`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(201))
  .catch(error=>{
    console.log('Error in / POST', error);
    res.sendStatus(500);
  });
});

module.exports = router;