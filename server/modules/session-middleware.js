const cookieSession = require('cookie-session');

const serverSessionSecret = () => {
  if(!process.env.SERVER_SESSION_SECRET || process.env.SERVER_SESSION_SECRET.length < 8){
    console.log(`
    ----------------------------
    
    *** WARNING ***
    Your application is not very secure.
    You need to set SERVER_SESSION_SECRET to a better secret
    Please add SERVER_SESSION_SECRET to your .env file
    
    It should be
    - longer than 8 characters
    - random characters
    - not words like "SoSuperSecret"
    
    If this warning is showing on Heroku,
    add or change your SERVER_SESSION_SECRET environment variable!
    
    ----------------------------`);
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
