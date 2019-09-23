const path = require('path');
const express = require('express');
const expEJSLayouts = require('express-ejs-layouts');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const routes = require('../routes/routes');
const router = express.Router();
const app_secret= 'yoursecret';

module.exports =  (app) => {
    app.set('port', process.env.PORT || 3000);
    
    // EJS configuration
    app.use(expEJSLayouts);
    app.set('views',path.join(__dirname, '../views/layouts'));
    app.set('view engine', 'ejs');

  
    // Set Static Folder
    // app.use(express.static('public'));
    app.use('/static', express.static(path.join(__dirname, '../public')));
    app.use('/modules', express.static(path.join(__dirname, '../node_modules')));
    
    // CORS Middleware
    app.use(cors());


    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser(app_secret));
    app.use(session({
        secret: app_secret,
        saveUninitialized: true,
        resave: true

    }));



    routes(app, router);

    return app;
};
