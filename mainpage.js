var http = require('http');
var express = require('express');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
app=express();

// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');//This is used to load the index.html file to the client side
});
app.post('/actionname',function (req, res){
    var name = req.body.fieldnamex,//extract the post request field contents with field name fieldnamex
    color = req.body.fieldnamey;

    //Processing uploaded file
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });
    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
    //End processing uploaded file...

    res.sendFile(__dirname + '/index.html');//This is used to load the index.html file to the client side
});
app.listen(8080);