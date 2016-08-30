var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.get('/', function(req, res) {

    // make sure index is in the right directory. In this case /app/index.html
    res.sendfile('index.html', {root: __dirname })
});

app.listen(port, function() {
  console.log('Our app is running on port ' + port);
});
