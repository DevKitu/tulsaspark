// dependencies

const express = require('express');
const _ = require('underscore');
//const router = express.Router();
const mongoose = require('mongoose');

const db_config = require('./config/database');
const s_config = require('./config/server');
/*
const home = require('./routes/home');

app.use('/home', home(app, router));

*/
const t_app = express();

app = s_config(t_app);


const server = app.listen(app.get('port'), () => {
    console.log('Web Server up and running on : http://localhost' + app.get('port'));

    
    // Connect To Database
    mongoose.connect(db_config.database,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to MongoDB');
        });
    // On Connection
    mongoose.connection.on('connected', () => {
        console.log('Connected to database '+ db_config.database);
        });
  
    // On Error
    mongoose.connection.on('error', (err) => {
        console.log('Database error: '+err);
        });

});
/*
app.get('/', (req, res, next) => {
    res.send('Hello World to the home page');
});
*/