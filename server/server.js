const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user-strategy');
const PORT = process.env.PORT || 5000;
const chartRoute = require('./routes/chartRouter');
const quoteRoute = require('./routes/quoteRouter');
const trackerRoute = require('./routes/trackerRouter');
const userRoute = require('./routes/userRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/chart', chartRoute);
app.use('/api/quote', quoteRoute);
app.use('/api/tracker', trackerRoute);
app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});