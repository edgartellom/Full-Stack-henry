var fs  = require("fs");
var http  = require("http");

// Escribí acá tu servidor
http.createServer((request, response) => {

    // if (request.url === '/arcoiris_doge'){
    //     fs.readFile('./images/arcoiris_doge.jpg', (err, data) => {
    //         if (err){
    //             response.writeHead(404, { 'Content-Type' : 'text/plain'});
    //             response.end('Img not found');
    //         } else{
    //             response.writeHead(200, { 'Content-Type' : 'image/jpeg'});
    //             response.end(data);
    //         }
    //     })
    // }

    fs.readFile(`./images${request.url}.jpg`, (err, data) => {
        if (err){
            response.writeHead(404, { 'Content-Type' : 'text/plain'});
            response.end('Img not found');
        } else{
            response.writeHead(200, { 'Content-Type' : 'image/jpeg'});
            response.end(data);
        }
    })
}).listen(1337, '127.0.0.1');