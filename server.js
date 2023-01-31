var express = require('express');
var fs = require('fs');
var url = require('url'); 
var app = express();
app.use(express.json());
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/about.html');
})
app.get('/pages/index.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/dist/home.bndl.js');
});
app.get('/pages/index.css', (req, res) => {
    res.setHeader("Content-Type", 'text/css');
    res.sendFile(__dirname + '/pages/index.css')
});
app.get('/pages/about.js', (req,res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/dist/about.bndl.js');
})
app.get('/contact', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/contact.html')
})
app.get('/pages/contact.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/dist/contact.bndl.js');
})
app.get('/solutions', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/solutions.html')
})
app.get('/pages/solutions.js', (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/dist/solutions.bndl.js')
})
app.get(/.common/, (req, res) => {
    console.log(req.path);
    if(fs.existsSync(__dirname + req.path) == true)
    {
        res.sendFile(__dirname + req.path);
    }
    else {
        res.statusCode = 404;
    }
    
})
app.get(/.pages/, (req, res) => {
    console.log(req.path);
    if(fs.existsSync(__dirname + req.path) == true)
    {
        res.sendFile(__dirname + req.path);
    }
    else {
        res.statusCode = 404;
    }
    
})
var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('test');
})