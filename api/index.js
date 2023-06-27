
const express=require('express')
const collection=require('./models/User')
const cors=require("cors")
const app=express()
const multer=require('multer');
const Post=require('./models/Post');
const fs=require('fs');

const uploadMiddleware=multer({dest:'uploads/'});
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/uploads',express.static(__dirname+ '/uploads'));
app.get("/login",cors(),(req,res)=>{

})
app.post("/login",async(req,res)=>{
    const{email,password}=req.body;
    try{
 const check=await collection.findOne({email:email})
 if(check){
    res.json("exist")
 }
 else{
    res.json("notexist")
 }
    }
    catch(e){
     res.json("failed")
    }
})



app.post("/Register",async(req,res)=>{
    const{email,password}=req.body;
    const data={
        email:email,
        password:password
    }
    try{
 const check=await collection.findOne({email:email})
 if(check){
    res.json("exist")
 }
 else{
    res.json("notexist")
    await collection.insertMany([data])
 }
    }
    catch(e){
     res.json("failed")
    }
})

app.post('/post',uploadMiddleware.single('file'),async(req,res)=>{
   const{originalname,path}=req.file;
  const parts= originalname.split('.');
  const ext=parts[parts.length-1];
  const newPath=path+'.'+ext;
fs.renameSync(path,newPath);

const {title,summary,author,content}=req.body;

const postDoc=await Post.create({
title,
summary,
content,
author,
cover:newPath
});
res.json(postDoc);


});

app.get('/post',async(req,res)=>{
   const posts=await Post.find();
   res.json(posts);
});

app.get('/post/:id',async(req,res)=>{
   const {id}=req.params;
   const postDoc=await Post.findById(id).populate('author',['username']);
   res.json(postDoc);
});
app.listen(8000,()=>{
    console.log("post connected ");
});