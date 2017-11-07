//
// const http = require('http');
// const port = '8888';
//
// let server = http.createServer((request,response) =>{
//     console.log(request.url);
//     response.write('<h1>hello world</h1>');
//     response.end();
// });
//
// server.listen(port, () => {
//     console.log(`成功监听${port}端口`);
// });

//方式二
const express = require('express');
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded());
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);


app.get('/',function (req,res) {
    console.log(req.method);
    res.send('hello express');
});
app.post('/',(request,response) => {
    console.log(request.method);
    console.log(request.query);
    console.log(request.body);
    response.status(200);
    response.send(request.body.name);
});

app.listen('8888',function () {
    console.log(`成功监听8888端口`);
});