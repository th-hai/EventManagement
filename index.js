const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv/config');

const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));

// Middlewares

const eventRouter = require('./server/routes/api/event');
const userRouter = require('./server/routes/api/user');
const authRouter = require('./server/routes/api/auth');
const sponsorRouter = require('./server/routes/api/sponsor');
const categoryRouter = require('./server/routes/api/category');
const speakerRouter = require('./server/routes/api/speaker');
const ticketRouter = require('./server/routes/api/ticket');
const uploadRouter = require('./server/routes/api/upload');

// ROUTES

app.use('/events', eventRouter);
app.use('/api/user', authRouter);
app.use('/api', uploadRouter);
app.use('/user', userRouter);
app.use('/sponsors', sponsorRouter);
app.use('/category', categoryRouter);
app.use('/speakers', speakerRouter);
app.use('/tickets', ticketRouter);

app.get('/', (req, res) => {
    res.send('We are on home');
});
// Connect to DB

mongoose.connect(process.env.MONGO_URI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    // console.log(mongoose.connection);
    if(error) throw error;
    console.log('Connected to Database');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});