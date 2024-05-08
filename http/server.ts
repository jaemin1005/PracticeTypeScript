import http = require('http');
import fs = require('fs');

interface ImgMsg{
  title : string;
  data : Buffer;
}

let server = http.createServer((req, res) => {
  
  console.log(req.method);

  if(req.method === "GET"){
    const url = req.url;
    console.log(url);
    if(url == "/"){
      fs.readFile("http/a.html", (err, data) => {
        if(err){
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          res.end('500 - Internal Error');
          return;
        }
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }

    if(url == "/thunder.webp"){
      fs.readFile("http/thunder.webp", (err, data) => {
        if(err){
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          res.end('500 - Internal Error');
          return;
        }
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }

    if(url == "/paka"){
      fs.readFile("http/paka.png",(err, data) => {
        if(err){
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          res.end('500 - Internal Error');
          return;
        }
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }

    if(url == "/client.js"){
      fs.readFile("http/client.js",(err, data) => {
        if(err){
          res.writeHead(500, {'Content-Type' : 'text/plain'});
          res.end('500 - Internal Error');
          return;
        }
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    }
  }

  if(req.method === "POST"){   
  }
});




server.listen(3000, function(){
  console.log("이 서버 잘돌아가!");
  console.log("http://localhost:3000");
});
