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