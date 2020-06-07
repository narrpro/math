const cors = require('cors')
const express = require('express');
const history = require('connect-history-api-fallback')
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const app = express();

app.use(cors())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(history());

// app.use(function(req, res, next){
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Origin', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Origin', 'Content-Type');
//     next();
//   })
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, '../', 'fvue', 'dist')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mygabia', require('./routes/mygabia'))
app.use('/paper', require('./routes/paper/index'));



  app.get('/', function(req, res) { res.sendFile('Hellow Chating App Server'); });

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



  module.exports = app;
