const express = require('express');
const path = require('path');
const morgan  = require('morgan');
const routes = require('./routes/routes');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const config = require('./config');

const app = express();

/* Settings */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* Middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(myConnection(mysql, {
    host: config.DB.host,
    user: config.DB.user,
    password: config.DB.password,
    port: config.DB.port,
    database: config.DB.name
}, 'single'));

/* Routes */
app.use('/', routes);

/* Static */
app.use('/public', express.static(path.join(__dirname, 'public')))

/* Start */
app.listen(5000, () => {
    console.log('Server running on port 5000');
});