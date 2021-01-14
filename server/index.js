const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

require('dotenv/config');

const port = process.env.PORT || 5000;

app.use(express.static("public"));


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));
app.use(fileUpload({
    useTempFiles: true
}));

mongoose.connect(process.env.MONGO_URI, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(error) throw error;
    console.log('Connected to Database');
})

// Middlewares
const routes = require('./routes')


// ROUTES
app.use(routes);

app.get('/', (req, res) => {
    res.send('We are on home');
});
// Connect to DB

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
}


app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});