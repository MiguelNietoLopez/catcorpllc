var express = require('express');
const path = require('path');
var app = express();
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/index.html');
});
app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/about.html');
})
app.get('/pages/index.js', (req, res) => {
    res.setHeader("Content-Type", "text/babel");
    res.sendFile(__dirname + '/pages/index.js');
});
app.get('/pages/about.js', (req,res) => {
    res.setHeader("Content-Type", 'text/babel');
    res.sendFile(__dirname + '/pages/about.js');
})
app.get('/common/header.js', (req, res) => {
    res.setHeader('Content-Type', 'text/babel');
    res.sendFile(__dirname + '/common/header.js');
})
var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('test');
})