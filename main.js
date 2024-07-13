var http = require('http');
var server = http.createServer(function (req, res) {
    if(req.url =="/") {
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.write('<h1>This home page</h1>');
        res.end();
    }else if(req.url=="/about") {
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.write('<h1>This about page</h1>');
        res.end();
    }else if(req.url=="/contact") {
        res.writeHead(200, { 'Content-Type': "text/html" });
        res.write('<h1>This contact page</h1>');
        res.end();
    }
});

server.listen(8080);
console.log('server running sucessfully');