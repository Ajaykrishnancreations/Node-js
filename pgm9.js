var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/"; 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name:"ajai"};                                            // for delete many {mark:{$lt:50}}
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {      // deletMany
    if (err) throw err;
    console.log("1 document deleted");                                     // console.log("delete many")
    db.close();
  });
});