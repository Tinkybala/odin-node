const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) =>{
    const q = url.parse(req.url, true);
    const pathname = q.pathname === '/' ? "./index.html" : '.' + q.pathname + '.html'  ;
    fs.readFile(pathname, 'utf8', function(err, data){
        //if pathname does not exist
        if(err){
            const data = fs.readFileSync('./404.html');
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080)

