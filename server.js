var connect = require('connect');
var serveStatic = require('serve-static');

var MongoClient = require('mongodb').MongoClient;
assert = require('assert');
var url = 'mongodb://localhost:27017/tictactoe';

MongoClient.connect(url,function(err,db) {
    assert.equal(err,null);
    console.log("Connected correctly to the server");
    
    var collection = db.collection("game");
    collection.insertOne({name:'first_insert'}, function(err,result){
        assert.equal(err,null);
        console.log("After Insert");
        console.log(result.ops);
    });
    
    db.dropCollection("game", function(err,result){
        assert.equal(err,null);
        db.close();
    });
});

var app = connect();
/*
connect().use('/public',serveStatic(__dirname + '/public/')).listen(8080, function () {
    console.log('Tic-Tac-Toe running on 8080...');
});

connect().use('/post', function doesNothing(req,res) {
    console.log("Post request received");
});
*/

app.use('/public',serveStatic(__dirname + '/public/'));
app.use('/post',function doesNothing(req,res) {
    console.log("received a request to post to database");
});
app.listen(8080,function(){
    console.log('tic tac toe running on 8080');
});
