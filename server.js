var express = require('express');
const { url } = require('inspector');
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
app.get('/common/footer.js', (req, res) => {
    res.setHeader('Content-Type', 'text/babel');
    res.sendFile(__dirname + '/common/footer.js');
})
app.get('/contact', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/contact.html')
})
app.get('/pages/contact.js', (req, res) => {
    res.setHeader('Content-Type', 'text/babel');
    res.sendFile(__dirname + '/pages/contact.js');
})
app.get('/solutions', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/solutions.html')
})
app.get('/pages/solutions.js', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(__dirname + '/pages/solutions.js')
})
app.get('/common/images/catoilpainting1.jpg', (req, res) => {
    res.sendFile(__dirname + "/common/images/catoilpainting1.jpg");
})
var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('test');
})