require("dotenv").config()
const express=require("express")
// import express from "express"
const app= express()
const githubdata="dkufadinc.m,f jkdhfaldnmfd udfkdfnmadh ndfuoae8 dm    30ero   l"
const port =3008
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/github",(req,res)=>{
    res.json(githubdata)

})
app.get("/twitter",(req,res)=>{
    res.send("hiteshdotcom")
})
app.get('/login',(req,res)=>{
    res.send("<h1> please login at chai our code</>")

})
app.get("/youtube",(req,res)=>{
res.send("chai and code")
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})