const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
const encryptLib = require('../modules/encryption');
const { rejectUnauthenticated } = require('../modules/auth-middleware');
const userStrategy = require('../strategies/user-strategy');

router.get('/', (req, res) => {
  res.send(req.user);
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

router.post('/login', userStrategy.authenticate('local'), (req, res)=>{
  res.sendStatus(200);
});

router.post('/logout', (req, res)=>{
  req.logout();
  res.sendStatus(200);
});

router.post('/register', (req, res)=>{
  const id = [req.body.email, encryptLib.encryptPassword(req.body.password)];
  const sqlQuery = `INSERT INTO "user" (email, password)
                    VALUES ($1, $2);`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(201))
  .catch(error=>{
    console.log('Error in /:id GET', error);
    res.sendStatus(500);
  });
});

router.put('/close', (req, res)=>{
  const id = [req.body.id];
  const sqlQuery = `UPDATE "user" 
                    SET disabled = NOT disabled 
                    WHERE id = $1;`;
  pool.query(sqlQuery, id)
  .then(()=>res.sendStatus(200))
  .catch(error=>{
    console.log('Error in /close PUT', error);
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

router.put('/password', rejectUnauthenticated, (req, res)=>{
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