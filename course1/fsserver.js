var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('.' + req.url, 'utf8', function(err, data){
        res.end(err ? err.toString() : data);
    });
}).listen(process.env.PORT);