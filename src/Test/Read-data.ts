
import http = require("http");
import fs = require("fs");


function loadPokemonNames(path : string) {
  try {
    if (typeof(path) === "string") {
      const pokemonValue = fs.readFileSync(path, 'utf8');
      return JSON.parse(pokemonValue);
    } 
    // else 를 사용하는 대신 try catch 문법을 사용해서 에러를 잡아내는 것이
    // '에러 처리'라는 것을 명시적으로 이야기 하는 좋은 어휘
  } catch (error) {
    // 매개변수 error는 catch구문이 실행될 때 자동으로 전달되는 변수
    console.error("에러 내용:", error);
  }
}

//const data = loadPokemonNames("./pokemonNames.json");

http.createServer((req,res) => {


  console.log(req.url);

  if(req.url == "/"){
    fs.readFile("index.html", (err,data) => {
        if(err) return;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    })  
  }

  if(req.url == "/Read-data-client.js"){
    fs.readFile("Read-data-client.js", (err,data) => {
      if(err) return;

      res.writeHead(200,  {'Content-Type': 'text/javascript' });
      res.end(data);
    })
  }

  if(req.url == "/data.json"){
    fs.readFile("./pokemonNames.json", (err,data) => {
      if(err) return;

      res.writeHead(200,  {'Content-Type': 'appplication/json' });
      res.end(data);
    })
  }
}).listen(3000,() => {
  console.log("서버연괼되었음");
  console.log("http://localhost:3000");
})