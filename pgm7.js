var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var dbo=db.db("mydb");
var qry={mark:{$lt:95}} 
dbo.collection("customers").find(qry).toArray(function(err,res){
    if(err) throw err;
    console.log(res);
db.close();  
});  
});  

//QUERY = EX:(10-20 MARK)