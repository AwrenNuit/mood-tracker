const cookieSession = require('cookie-session');
// REQUIRE SOME SORT OF WARNING FILE HERE

const serverSessionSecret = () => {
  if(!process.env.SERVER_SESSION_SECRET || process.env.SERVER_SESSION_SECRET.length < 8){
    // LOG A PROMPT TO CHANGE DOTENV HERE
  }
  return process.env.SERVER_SESSION_SECRET;
}

module.exports = cookieSession({
  secret: serverSessionSecret() || `secret`, // SET THIS IN .env FILE
  key: `user`,
  resave: `false`,
  saveUninitialized: false,
  maxAge: 60 * 60 * 1000, // Set to 1 hour - 60 min/hour * 60 s/min * 1000 ms/s
  secure: false // Is this passed through HTTPS?
});
