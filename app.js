var express = require('express');
var lessMiddleware = require('less-middleware');
var app = express();

app.use(lessMiddleware(__dirname + '/public'));
app.use(express.static('public'));


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});