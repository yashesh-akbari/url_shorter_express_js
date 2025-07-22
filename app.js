import express, { urlencoded } from "express"
import path from "path"
import fs from "fs/promises"

let app=express();
let port=process.env.port || 3000;
let arr=[];
let obj={};

app.use(express.urlencoded({extended:true}))

let filepath=path.join(import.meta.dirname,"public","index.html")
let errorfilepath=path.join(import.meta.dirname,"views","error404.html")
let storedatalinks=path.join(import.meta.dirname,"views","links.json")

app.get("/",(req,res)=>{
  res.status(200).sendFile(filepath);
})

app.post("/conform",(req,res)=>{
  obj={
    url:req.body.user.url,
    shortcode:req.body.user.shortcode
  }
  arr.push(obj);
  let storedata=async ()=>{
    try{
      let result=await fs.writeFile(storedatalinks,JSON.stringify(arr),"utf-8");
      console.log(`file data updated sucessfuly `+result);
    }catch(error){
      console.log(error);
    }
  }
  storedata();
  // console.log(req.body.user.url,req.body.user.shortcode);
  res.redirect("/");
})

app.get("/links",async (req,res)=>{
  try{
    let data=await fs.readFile(storedatalinks,"utf-8");
    res.json(JSON.parse(data));
  }catch(error){
    console.log(error);
  }
})

app.use((req,res)=>{
  res.status(404).sendFile(errorfilepath);
})

app.listen(port,()=>{
  console.log(`server is runing at http://localhost:${port}`); 
})