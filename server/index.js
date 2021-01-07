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
const routes = require('./routes')


// ROUTES
app.use(routes);

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