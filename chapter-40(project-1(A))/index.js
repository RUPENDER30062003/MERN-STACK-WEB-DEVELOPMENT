const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./modals/listing");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main().then(()=>{
        console.log("Connected to MongoDB!");
    })
    .catch((err)=>{
        console.log(err);
    });



app.get("/",(req, res)=>{
    res.send("Hi,I am root");
});

app.get("/testListing",async(req,res)=>{

    let sampleListing=new Listing({
            title: "My New Villa",
            description: "By the beach",
            price: 1200,
            location: "Calangute, Goa",
            country: "India"
    });

    await sampleListing.save();
    console.log("sample saved");
    res.send("successful testing");
    
});

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
});
