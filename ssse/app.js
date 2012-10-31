
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.set('port', process.env.PORT);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/submit', function(req, res, next){
    res.render('submit', { title: '提交網址', message : null });
});
app.post('/submit', function(req, res, next){
    if(!req.body.url) throw new Error('no url');
    res.render('submit', { title: '提交網址', message : '成功提交網址 ' + req.body.url });
});
app.get('/search', function(req, res, next){
    if(!req.query.keyword) throw new Error('no keyword');
    res.render('search', { title: '搜尋 ' + req.query.keyword});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
