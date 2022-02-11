// updata one
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { name: "abi" };
  var newvalues = { $set: {name: "abi",mark:99} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    console.log(res);
    db.close();
  });
});

//---------------------------------------------------------------
//updata many

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { mark: {$gt:60}};
//   var newvalues = { $set: {mark:100} };
//   dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("many document updated");
//     console.log(res);
//     db.close();
//   });
// });