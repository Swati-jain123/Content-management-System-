const mongoose=require('mongoose');
const express=require('express');
const DB='mongodb+srv://swati:Swati5432@cluster0.lw9iow4.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>
{
    console.log("mongodb connected");

})
.catch(()=>{
    console.log('failed');
})

const newSchema=mongoose.Schema({
    email:{
        type:String,
        min:10,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema)

module.exports=collection