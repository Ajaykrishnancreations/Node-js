var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("mydb");
var myobj={rno:5,name:"ajai",mark:36};
dbo.collection("customers").insertOne(myobj,function(err,res){
    if(err) throw err;
    console.log("successfully inserted");
db.close();  
});  
});  