import * as http from "http";

let mainDocument = `
<html>
  <body>
    <h1>hello</h1>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(mainDocument);
  res.end();
});

server.listen(3000, function(){
  console.log("이 서버 잘돌아가!");
  console.log("http://localhost:3000");
});


let hi : number = 123;
//Practice20240507.test();
