var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const goodsRouter = require("./routes/goods");
const adRouter = require("./routes/ad");
const shoppingCartRouter = require("./routes/shoppingCart");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/goods", goodsRouter);
app.use("/ad", adRouter);
app.use("/shoppingCart", shoppingCartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// Connect database
mongoose.connect("mongodb://localhost/dang");
mongoose.Promise = global.Promise;
mongoose.connection
    .on("error", console.error.bind(console, "MongoDB 连接错误："));

module.exports = app;
