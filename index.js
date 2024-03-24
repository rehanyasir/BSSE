require("dotenv").config()
const express=require("express")
// import express from "express"
const app= express()
const port =
app.get("/",(req,res)=>{
    res.send("Hello world")
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