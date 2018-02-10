const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const multer=require("multer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true }));
app.use(express.static(__dirname+"/views"))


app.get('/',(req,res)=>{res.send('dev sdfsdf')})

app.post('/login',(req,res)=>{ 
res.write(req.body.username);
res.end();
})

app.listen(3031,()=>{console.log('Port up 3031')})