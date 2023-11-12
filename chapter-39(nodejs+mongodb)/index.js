const express=require("express");
const app=express();
const path=require("path");
// getting-started.js
const mongoose=require('mongoose');
const Chat=require("./models/chat.js");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/",(req,res)=>{
    console.log("Working");
    res.send("root is Working");
})

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});



main()
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>
    console.error(err)
);    

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// let chat1=new Chat({
//     from:"neha",
//     to:"priya",
//     msg:"hello",
//     created_at:new Date()
// });

// chat1.save().then((res)=>{
//     console.log(res);
// });


// index routes
app.get('/chats',async(req, res) => {
    let chats=await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats});
});

//new routes
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

// Create Route
app.post("/chats",(req, res)=>{
   let { from,to,msg }=req.body;
   let newChat = new Chat({
    from:from,
    to: to,
    msg: msg,
    created_at: new Date()
   });
   
   newChat
    .save ()
    .then((res) => {
        console. log ("chat was saved");
    })
    .catch( (err) => {
        console. log (err);
    });
    res.redirect("/chats");
});

// edit route //
app.get("/chats/:id/edit", async(req,res)=>{
    let {id}=req.params;
    let chat= await Chat.findById(id); 
    // it reutrn a promise and we have to await here  that's why we add async keyword in the above function
    res.render("edit.ejs",{chat});
});

// update route
app.put("/chats/:id",async(req,res)=>{
    let {id}= req.params;
    let {msg:newMsg} = req.body;
    let updatedChat=await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
});

//Delete Route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deleteChat=await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");
});

