var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("mydb");
var myobj={rno:2,name:"gowthaman",mark:98};
dbo.collection("customers").find({}).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
db.close();  
});  
});  