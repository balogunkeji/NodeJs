import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
   if(req.url === '/') {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end('<h1>Hello World</h1>');
   } else  if (req.url === '/about') {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end('<h1>Hello World About</h1>');
   } else {
       res.writeHead(400, {'Content-Type': 'text/html'});
       res.end('<h1>Not Found</h1>');
   }
})

server.listen(PORT, () => {
    console.info('listening to port 8080');
});