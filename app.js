const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
// Middlewares

const eventsRouter = require('./routes/events');

// ROUTES

app.use('/events', eventsRouter);

app.get('/', (req, res) => {
    res.send('We are on home');
});
// Connect to DB

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () => {
    console.log('Connecting to Database');
})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
 
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});


app.listen(3000, () => {
    console.log('express server started');
});