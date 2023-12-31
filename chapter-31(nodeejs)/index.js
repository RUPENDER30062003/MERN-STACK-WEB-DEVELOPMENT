const express=require("express");
const app=express();
const path=require("path");

const port=8080;


// app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/css")));


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/", (req, res)=>{
   res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("hello");
 }); 

app.get("/rolldice", (req, res)=>{
    let dice=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:dice});
}); 

app.listen(port, ()=>{
    console.log(`listenning on port ${port}`);
});

app.get("/ig/:username", (req, res)=>{
    const followers=["adam", "bob", "steve", "abc"];
    let {username} = req.params;
    res.render("instagram.ejs",{username,followers});
});

app.get("/insta/:username",(req,res)=>{

    let {username}=req.params;
    const instaData=require("./data.json");
    const data=instaData[username]
    if(!data){
        // res.send("ERROR !NO SUCH ACCOUNT EXIST");
        res.render("error.ejs")
    }
    res.render("instagram1.ejs",{data});

});
