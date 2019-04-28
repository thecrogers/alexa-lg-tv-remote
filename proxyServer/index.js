var express = require('express')
var app = express()
const http = require('http');
const port = 80


app.get("/volumeUp", function(req, res) {
    http.get('http://localhost:8081/volumeUp');	
    res.status(200).send("OK");
})

app.get("/volumeDown", function(req, res) {
    http.get('http://localhost:8081/volumeDown');
    res.status(200).send("OK");
})

app.get("/mute", function(req, res) {
    http.get('http://localhost:8081/mute');
    res.status(200).send("OK");
})

app.get("/play", function(req, res) {
    http.get('http://localhost:8081/play');
    res.status(200).send("OK");
})

app.get("/pause", function(req, res) {
    http.get('http://localhost:8081/pause');
    res.status(200).send("OK");
})

app.get("/startApp/:id", function(req, res) {
    http.get('http://localhost:8081/startApp/'+ req.params.id);
    res.status(200).send("OK");
})


app.get("/turnOn", function(req, res) {
    http.get('http://localhost:8081/turnOn');
    res.status(200).send("OK");
})


app.get("/turnOff", function(req, res) {
    http.get('http://localhost:8081/turnOff');
    res.status(200).send("OK");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
