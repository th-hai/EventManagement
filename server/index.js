const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv/config');

const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// Middlewares

const eventRouter = require('../server/routes/api/event');
const authRouter = require('../server/routes/api/auth');
const sponsorRouter = require('../server/routes/api/sponsor');
const categoryRouter = require('../server/routes/api/category');
const speakerRouter = require('../server/routes/api/speaker');
const ticketRouter = require('../server/routes/api/ticket');

// ROUTES

app.use('/events', eventRouter);
app.use('/api/user', authRouter);
app.use('/sponsors', sponsorRouter);
app.use('/category', categoryRouter);
app.use('/speakers', speakerRouter);
app.use('/tickets', ticketRouter);

app.get('/', (req, res) => {
    res.send('We are on home');
});
// Connect to DB

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    // console.log(mongoose.connection);
    console.log('Connected to Database');
})

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection Error:'));

// db.once('open', function() {
//   console.log("Successfully connected to MongoDB!");
// });


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});