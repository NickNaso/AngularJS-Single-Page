var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));


app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.get('/', function (req, res) {
  res.render('index');
});
/*app.get('/', function(req, res) {

    res.sendfile('index.html', {root: __dirname })
});*/

app.listen(port, function() {
  console.log('Our app is running on port ' + port);
});
