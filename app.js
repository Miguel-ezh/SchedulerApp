var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.set('secret', 'ajfh4h982n53hcr3orm324roxmr2n473gr683t5b46c32isuybrumbfm328f47y*y4fb43u2yg4');

// view engine setup
app.set('views', path.join(__dirname, 'app'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/app', express.static(path.join(__dirname, 'app')));
app.use('/jspm_packages', express.static(path.join(__dirname, 'jspm_packages')));
app.use('/public/config.js', express.static(path.join(__dirname, 'config.js')));


var routes = require('./routes/index');
var loginroute = require('./routes/login');
var usersroute = require('./routes/users');

app.use('/', routes);
app.use('/api/v1/login', loginroute);
app.use('/api/v1/user', usersroute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
