var http = require('http');
var fs = require('fs');
var htmlName ='/public/test.html';


function onRequest(request,response){
    console.log('request received');
    response.writeHead(200,{'Content-Type':'text/html'});
    var myReadStream = fs.createReadStream(__dirname + htmlName ,'utf8');
    myReadStream.pipe(response);
}

http.createServer(onRequest).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');