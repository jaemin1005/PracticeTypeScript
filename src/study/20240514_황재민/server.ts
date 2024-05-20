import http = require("http");
import fs = require("fs");
import { CustomElement } from "./CustomClass";


/**
 * * 2024.05.14 황재민
 * * 서버 실행
 * * 포트 : 8080 
 */
http.createServer((req,res) => {

 if(req.method === "GET"){
  HttpGetMethodProcess(req,res);
 }


}).listen(8080, () => {
  console.log("서버가 시작되었다");
  console.log("서버주소 : http://localhost:8080");
});


/**
 * * 2024.05.14 황재민
 * * GET 메소드 처리
 * @param req : client 요청
 * @param res : server 응답
 * @returns 
 */
function HttpGetMethodProcess(req : http.IncomingMessage, res :  http.ServerResponse<http.IncomingMessage>){
  
  console.log(req.url);

  if(req.url === undefined){
    res.writeHead(500);
    res.end("Internal Sever Error");
    return;
  }

  //* MainPage를 보내줍니다 
  if(req.url === "/"){
    GetFile("./index.html",res, {"Content-Type": "text/html"});
    return;
  }

  //* url의 /command/를 포함하였을 때 처리.
  if(req.url.startsWith('/command/')) ReqGETCommandProcess(req.url, res);

  //* 기타 파일 요청일 경우, 해당 파일을 보내준다. (css, js) 등
  else{
    GetFile(req.url, res, {"Content-Type": `${GetContentType(req.url)}`})
  }
}


/**
 * * 2024.05.14 황재민
 * * /command/를 포함하여 url이 왔을 때 처리하는 함수
 * @param command : /command/* 를 포함한 url
 * @param res : server의 응답.
 */
function ReqGETCommandProcess(command : string, res : http.ServerResponse<http.IncomingMessage>){
  
  command = command.replace('/command/', "");
  command = decodeURI(command);

  //* command가 조건문에 포함되어있을 경우 해당 데이터를 보내준다.
  let response = function<T>(obj : T, res : http.ServerResponse<http.IncomingMessage>){
    res.writeHead(200, { "Content-Type" : "json/" });
    res.end(JSON.stringify(obj));
  }

  if("HOME"){
    let obj = new CustomElement("div", {
      textContent : command
    },{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#D9D9D9",
    });

    response(obj, res);
  }

  else if("Data Type"){
    let obj = new CustomElement("div", {
      textContent : command
    },{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#BDDE86"
    });

    response(obj, res);
  }

  else if("Object & Array"){
    let obj = new CustomElement("div", {
      textContent : command
    },{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#86DEA9"
    });
    response(obj, res);
  }

  else if("Function"){
    let obj = new CustomElement("div", {
      textContent : command
    },{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#86A9DE",
    });
    response(obj, res);
  }

  else if("if & for"){
    let obj = new CustomElement("div", {
      textContent : command
    },{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#AD86DE"
    });
    response(obj, res);
  }

  else{
    res.writeHead(500);
    res.end(":)");
  }
}

/**
 * * 2024.05.14 황재민
 * * 파일을 요청하였을 경우 path를 이용해 파일을 보내준다.
 * @param path : 파윌 위치
 * @param res : 서버의 응답
 * @param headers : res의 헤더 설정
 */
function GetFile(path : string, res : http.ServerResponse<http.IncomingMessage>, headers : http.OutgoingHttpHeaders | http.OutgoingHttpHeader[]){

  //* /로 시작할 경우 제거.
  if(path[0] === "/")
    path = path.substring(1);


  fs.readFile(path, (err, data) => {
    if(err){
      res.writeHead(500);
      res.end("Internal Server Error");
    }

    else{
      res.writeHead(200, headers)
      res.end(data);
    }
  })
}

/**
 * * 2024.05.14 황재민
 * * . 으로 스플릿한다
 * * 맨 뒤의 배열 값을 가져온다
 * * 해당 파일의 확장자가 적혀있어, 맞는 ContentType을 반환한다.
 * @param path : 파일 주소
 * @returns Header Content-Type의 값
 */
function GetContentType(path : string) : string{
  
  let split = path.split(".");
  let fileType = split[split.length-1];

  if(fileType === "html") return "text/html";
  else if(fileType === "css") return "text/css";
  else if (fileType == "ico") return "image/x-icon";
  else if (fileType == "js" || fileType == "mjs") return "text/javascript";
  else return "Multipart/related";
}









