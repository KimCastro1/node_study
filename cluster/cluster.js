const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster){
    console.log(`Master Process Id:${process.pid}`);
    for(let i = 0; i<numCPUs; i++){
        cluster.fork();
    }
    cluster.on('exit',(Worker, code, signal)=>{
        console.log(`${worker.process.pid} worder exit`);
        console.log('code', code, 'signal', signal);
    });
}else{
    http.createServer((rep,res)=>{
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
        res.write('<h1>Hello Node!</h1>');
        res.end('<p>Hello Cluset</p>');
    }).listen(8006);

    console.log(`${process.pid} worker running`);
}