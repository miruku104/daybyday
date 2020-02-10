var http = require("http");
http.createServer(function (request, response){
	response.writeHead(200, { 'Content-Type':'text/plain'});
	response.end('Hello world\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

// IP/Domain
// Port: 0-65536 (2^16)
//  0 - 1024: he dieu hanh
//  1024 -> 65536: user
// 80: HTTP default port
// 127.0.0.1/localhost => loopback IP