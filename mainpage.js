var http = require('http');
var express = require('express');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
app=express();
//app.use(express.compress());
var ejs = require('ejs'); 
//ejs.open = '{{'; 
//ejs.close = '}}';


    app.set("view options", {layout: false});  
    app.engine('html', require('ejs').renderFile); 
    //app.use(app.router);
    app.set('view engine', 'html');
    app.set('views', "/");

 



// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', function (req, res){
    //res.sendFile(__dirname + '/index.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/main.html');
});
app.get('/main', function (req, res){
    //res.sendFile(__dirname + '/index.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/main.html');
});

app.get('/research', function (req, res){
    //res.sendFile(__dirname + '/research.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/research.html');
});
app.get('/member', function (req, res){
    //res.sendFile(__dirname + '/member.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/member.html');
});
app.get('/publication', function (req, res){
    //res.sendFile(__dirname + '/publication.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/publication.html');
});
app.get('/teaching', function (req, res){
    //res.sendFile(__dirname + '/teaching.html');//This is used to load the index.html file to the client side
    res.render(__dirname + '/teaching.html');
});
/*
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
*/
app.listen(8080);