/**
 * Created by Administrator on 2015/5/5.
 */

var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{
    "Content-Type":"text/plain"
});
       response.end("Hello");
}).listen(8999,"127.0.0.1");
console.log("my server is running");

