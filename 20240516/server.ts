import http = require("http");
import fs = require("fs");
import url = require("url");
import qs = require("node:querystring");

const path = __dirname



http.createServer((req,res) => {

  if(req.method == "GET"){
    GetMethod(req,res);
  }


}).listen(8080, () => {
  console.log("서버 시작되었음");
  console.log("http://localhost:8080");
})


async function GetMethod(req:http.IncomingMessage , res:http.ServerResponse<http.IncomingMessage>){

  if(req.url === "/"){
    GetFileRead(path + "/index.html", {"Content-Type" : "text/html"}, res);
  }

  //* 혹시 url에 "/test" 글자가 있다면, 아래에 로직을 실행해줄래?
  //* url에 querystring이라는 이름이 보여서 적당히 잘라서 사용하려고 해
  //* 받아온 데이터를 해석해 줄래?
  if(req.url?.startsWith("/test")){

    let query = url.parse(req.url,true).query;
    let fileName = query.name;
    let fileDetail : string = query.detail!.toString();
    let filePath = path + "/" + fileName +".txt";
    
    const inputData = req.url.split("?")[1];
    const data = qs.decode(inputData);
    
    await fs.writeFile(filePath, fileDetail , (err) => {
      if(err){
        res.statusCode = 500;
        res.end();
        return;
      }
    });

    res.statusCode = 200;
    res.end();
  }
}

function GetFileRead(path : string, header : http.OutgoingHttpHeaders | http.OutgoingHttpHeader[],res : http.ServerResponse<http.IncomingMessage>){
  
  fs.readFile(path, (err, data) => {
    if(err){
      console.log(path);
      res.statusCode = 500;
      res.end();
      return;
     }

     res.writeHead(200, header);
     res.end(data);
  })
}