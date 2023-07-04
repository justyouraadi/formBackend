const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer((req, res) => {
   const filePath = 'index.html';


   if(req.url == "/Home"){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        else{
            res.writeHead(200, { 'Content-Type': 'text/html' });
            const modifiedContent = data.replace('<%= name %>', 'John Doe');
            res.end(modifiedContent);
        }
       
      });
   }

   else if(req.url == "/Submit"){
    res.end("done beti");
   }


});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
