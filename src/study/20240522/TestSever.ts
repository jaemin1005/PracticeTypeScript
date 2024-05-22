import http = require("http");
import fs = require("fs");

type ResMethod = (req : http.IncomingMessage, res : http.ServerResponse<http.IncomingMessage>) => void;

const GetMethod : ResMethod = function(req, res) {
  if(req.url === "/"){
    fs.readFile("src/study/20240522/test.html", (err,data)=> {
      if(err) throw new Error("err");

      res.writeHead(200, {"Content-Type" : "text/html"});
      res.end(data);
    })
  }

  else{
    console.log(req.url);
    res.statusCode = 200;
    res.end();
  }
}


http.createServer((req,res) => {
  
  if(req.method === "GET"){
    GetMethod(req,res);
  }

  if(req.method === "POST"){
    res.statusCode = 200;
    res.end();
  }

}).listen(3000,() => {
  console.log("서버 연걸");
})

