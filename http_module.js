const http = require('http');
const fs = require('fs');
const { Http2ServerResponse } = require('http2');

// const server = http.createServer((req, res)=>{
// res.write('hello world node.js');
// res.end();
// });

// const server = http.createServer((req, res)=>{
//     if(req.url == '/'){
//         res.write('hello world node js');
//         res.end();
//     }
//     else{
//         res.write('using some other domain');
//         res.end();
//     }
// })
//server.listen('3000');



// Serving static files with http and file system modules

http.createServer((req, res)=>{
const readStream = fs.createReadStream('./static/index.html');
res.writeHead(200,{'content-type': 'text/html'});
readStream.pipe(res);
}).listen(3000);


