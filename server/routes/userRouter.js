const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/login/:password/:username', (req, res)=>{
  const id = [req.params.password, req.params.email];
  const sqlQuery = `SELECT * FROM "user"
                    WHERE password = $1 AND email = $2;`;
  pool.query(sqlQuery, id)
  .then(result=>res.send(result.rows[0]))
  .catch(error=>{
    console.log('Error in /login GET', error);
    res.sendStatus(500);
  });
});

router.get('/:id', (req, res)=>{
  const id = [req.params.id];
  const sqlQuery = `SELECT * FROM "user"
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(result=>res.send(result.rows[0]))
  .catch(error=>{
    console.log('Error in /:id GET', error);
    res.sendStatus(500);
  });
});

router.put('/details', (req, res)=>{
  const id = [req.body.id, req.body.email];
  const sqlQuery = `UPDATE "user"
                    SET email = $2
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(200))
  .catch(error=>{
    console.log('Error in /details PUT', error);
    res.sendStatus(500);
  });
});

router.put('/password', (req, res)=>{
  const id = [req.body.id, req.body.email, req.body.password];
  const sqlQuery = `UPDATE "user"
                    SET email = $2, password = $3
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(200))
  .catch(error=>{
    console.log('Error in /password PUT', error);
    res.sendStatus(500);
  });
});

module.exports = router;