var express =require('express');
var app=express();
var mongojs =require('mongojs');
var db=mongojs('contactl',['contactl']);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/contactl', function (req, res) {
    console.log('I received a GET request');
  //  p1={name:'tim',
   // email:'abc@gmail.com'
  // }
  // p2={name:'tim11',
  //  email:'abc11@gmail.com'
   //}
   //var contactl=[p1,p2];
  
    db.contactl.find(function (err, docs) {
      console.log(docs);
      res.json(docs);
    });
   // res.json(contactl);
  });
  
   app.post('/contactl',function(req,res){
       console.log(req.body);
       db.contactl.insert(req.body,function(err,doc){
          res.json(doc);
       })
   });

app.use(express.static(__dirname +"/public"));
app.listen(5000);
console.log("server running on port 5000");