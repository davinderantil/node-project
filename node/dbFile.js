const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const express= require('express');
const app=express();

const bodyparser=require ("body-parser");

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/views"));

app.get('/',(req,res)=>{
res.send("hello Welcome");

});

app.post('/login',(req,res)=>{



const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
console.dir(err);
    db.collection('signup', function (err, collection) {
        collection.insert({ id: 1, firstName: ''+req.body.userpassword+'', lastName: ''+req.body.username+'' });
    });

});

res.write("Welcome");
res.end();
});

app.listen('3031',()=>{
console.log('port up 3031');
})
