const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done)=>{
  console.log('in serial-------------------------------------------');
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  console.log('in de-serial-------------------------------------------');
  pool.query('SELECT * FROM "user" WHERE id = $1', [id])
  .then((result) => {
    const user = result && result.rows && result.rows[0];
    if(user){
      delete user.password;
      done(null, user);
    } else {
      done(null, null);
    }
  })
  .catch((error)=>{
    done(error, null);
  });
});

passport.use('local', new LocalStrategy((username, password, done)=>{
  console.log('in localstrategy-------------------------------------------');
  pool.query('SELECT * FROM "user" WHERE email = $1', [username])
  .then((result)=>{
    const user = result && result.rows && result.rows[0];
    console.log('user--------------', user);
    if(user && encryptLib.comparePassword(password, user.password)){
      done(null, user);
    } else {
      done(null, null);
    }
  })
  .catch((error)=>{
    console.log('Error setting user.', error);
    done(error, null);
  });
}));

module.exports = passport;