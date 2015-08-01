// SERVER.JS
// =============================================================================

'use strict';

/* global require*/
/* global module*/
/* global process*/
/*jslint nodejs: true*/

var config     = require('./app/config');
var connection = require('./app/connection');
var utils      = require('./app/lib/cd-utils');

var express    = require('express');
var session    = require('express-session');
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var msg        = require('gulp-messenger');
var cors       = require('cors');

var app        = express();
var port       = process.env.PORT || 3000;
var appName    = config.defaults.appName || 'BE Boilerplate (Node/Express)';

console.log('\n');
msg.Warning('=',appName,'=');

// SETUP APPLICATION
// =============================================================================

// log any request URI to the console, only when in `dev` mode (default: dev)
app.use(morgan('dev'));

// configure application middelware
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(session({secret: 'S3CR37', resave: false, saveUninitialized: true}));

app.use(function(res, req, next) {
  console.log('application request - global middleware');
  next();
});

// SETUP DATABASE
// =============================================================================
// NOTE: We are not using database yet so we arent callling this code


//var mongoose = require('mongoose');
//mongoose.connect(connection.database.url); // connect to our database
//msg.Success('Connected to ' + connection.database.url);


// LOAD MODELS
// =============================================================================
var models = require('./app/models');


// CONFIGURE ROUTE MIDDLEWARE
// =============================================================================

var router = express.Router();

router.use(function(req, res, next) {
  res.removeHeader("X-Powered-By");
  next();
});

// attach to router object
app.use('/', router);


// CONFIGURE NON-API ROUTES
// =============================================================================
// this will serve up and resource located in public directory

app.use(express.static('public'));

// CONFIGURE API ROUTES
// =============================================================================

// load all the API routes (see ./app/routes/index.js for details)
var routes = require('./app/routes');

// and finally attach router to API prefix
app.use('/api/v1', cors(), routes);

// START THE SERVER
// =============================================================================
app.listen(port);
msg.Success(utils.padStr( 'Static | API Server running on port ' + port, 80));
msg.Error(utils.padStr( ' --- Press <control-c> to Stop Server ---', 80));
msg.Info(utils.padStr( ' Created by Mike Erickson <codedungeon@gmail.com>', 80));
console.log('\n');
