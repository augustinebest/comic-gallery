const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const mailRoutes = require('./routes/mailRouter');

//Connecting to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://comic:group14scrum@ds125851.mlab.com:25851/comic'); 

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//CORS ERRORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Conrol-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
})

// Routes which should handle requests
app.use('/subscribe', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/mail', mailRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

module.exports = app;