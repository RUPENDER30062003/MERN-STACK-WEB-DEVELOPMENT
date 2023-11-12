const mongoose = require('mongoose');

main()
.then((res)=>{
    console.log(res);
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema =mongoose.Schema({
    title:{
       type: String,
       required: true,
       maxlength:20,
     },
    author:{
       type: String,
     },
    price:{
       type: Number,
       min:[1,"price too low for amazon selling"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:['fiction','non-fiction']
    },
    genre:[String],
});


const Book=mongoose.model("Book",bookSchema);

let book1=new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200
});

book1.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
});
  
let book2=new Book({
title:"Marvel Comics",
price:500,
category:"fiction",
genre:["comics","superhero"],
});

book2.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
});


Book.findOneAndUpdate(
    {name:"Marvel Comics"},
    {price:-100 },
    {runValidators:true}
)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
});
