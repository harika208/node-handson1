const http = require("http");

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.write("Home page");
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/contact'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(8080);