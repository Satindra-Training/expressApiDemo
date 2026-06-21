import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//static data source
const posts = [
    {id:1,title:"first title",description:"lorem ipsum"},
    {id:2,title:"second title",description:"hello world"}
];



const host = process.env.HOST;
const port = process.env.PORT;

const app = express();
app.use(cors()); //letting the server cors free.
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Post API</h1>");
})
app.get("/api/posts",(req,res)=>{
    res.status(200).json(posts);
})
//getting perticular record depends on post id
app.get("/api/posts/:id",(req,res)=>{
      let id = req.params.id;
      let post=posts.find((post)=>(post.id==id));
      if(!post){
          res.status(403).json({"message":"no post found!"});
      }
     else{
         res.status(200).json(post);     
      }
})
app.listen(port,host,()=>{
    console.log(`Express has started at http://${host}:${port}/`);
})




