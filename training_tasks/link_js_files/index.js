const http=require('http');
const fs=require('fs');
const url=require('url');


http.createServer(function(req,res){
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;
    fs.readFile(filename, function(err, data) {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(filename+"Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
    }).listen(3080);
