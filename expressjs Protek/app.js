var express = require('express');
var ejs = require('ejs');

var port = '3000';

var app = express();
app.set('view engine','ejs');
//app.set('views',path.join(__dirname,'views'));


//without templating engine
// app.get('/',function(req,res){
//     res.send("Helloo World");
// });

//with templating engine
app.get('/index/:Id',function(req,res){
    res.render('index',{ID:req.params.Id,QStr:req.query.qstr});
});

app.listen(port);
console.log("Server");