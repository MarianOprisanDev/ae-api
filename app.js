var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/aeapi');
let db = mongoose.connection;

// check db connection
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// check for db errors
db.on('error', function(err, next) {
  if(err) {
    console.log(error);
    next();
  }
});

var index = require('./routes/index');
var users = require('./routes/users');
var addUser = require('./routes/add-user');
var user = require('./routes/user');
var editUser = require('./routes/edit-user');

var customers = require('./routes/customers');
var addCustomer = require('./routes/add-customer');
var customer = require('./routes/customer');
var editCustomer = require('./routes/edit-customer');

// API
var getCustomers = require('./routes/get-customers');

var app = express();

// bring in models
let User = require('./models/user');
let Customer = require('./models/customer');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/add-user', addUser);
app.use('/user/', user);
app.use('/edit-user', editUser);

app.use('/customers', customers);
app.use('/add-customer', addCustomer);
app.use('/customer', customer);
app.use('/edit-customer', editCustomer);

// API
app.use('/get-customers', getCustomers);

// enable cors
// app.use(cors());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
