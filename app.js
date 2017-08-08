var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var get = require('./routes/get');
var post = require('./routes/post');
var content = require('./routes/content');
var strengths = require('./routes/strengths');
var substance = require('./routes/substance');
var news = require('./routes/news');
var finallys = require('./routes/finally');
var end = require('./routes/end');
var faculty = require('./routes/faculty');
var referral = require('./routes/referral');
var apply = require('./routes/apply');
var campus = require('./routes/campus');
var jishi = require('./routes/jishi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/text', get);
app.use('/post',post);
app.use('/content',content);
app.use('/strengths',strengths);
app.use('/substance',substance);
app.use('/news',news);
app.use('/finallys',finallys);
app.use('/end',end);
app.use('/faculty',faculty);
app.use('/referral',referral);
app.use('/apply',apply);
app.use('/campus',campus);
app.use('/jishi',jishi);

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
app.listen('8005',function () {
  console.log('serve statr.....')
});

module.exports = app;
