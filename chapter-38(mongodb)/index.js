const mongoose = require('mongoose');

// let url="https://localhost:8080/users";

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then((res)=>{
    console.log(res);
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);

const user1 = new User({
    name: "Adam",
    email: "adam@yahoo. in",
    age: 48,
});

user1.save();
   

const user2 = new User({
    name: "Eve",
    email: "eve@yahoo. in",
    age: 48,
});


user2.save()
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


User.insertMany([
    {name: "Tony", email: "tony@gmail. com", age: 50 },
    {name: "Bruce", email: "bruce@gmail. com", age: 47 },
    {name: "Peter", email: "peter@gmail. com", age: 30 },
]).then( (data) => {
  console. log (data);
});


User.find({})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


User.find({age:{$gte:47}})
.then((res)=>{
    console.log(res[0].name);
})
.catch((err)=>{
    console.log(err);
})


User.updateOne({ name:"Bruce" },{age:49})
.then ((res) => {
    console. log(res);
}).catch((err)=>{
    console.log(err);
});


User.updateMany({age:{$gt: 45}},{age: 45 })
.then ((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
});


User.findOneAndUpdate({ name: "Tony" },{ age: 60 },{new:true })
.then((data)=>{
     console. log (data);
});


// return modified document rather than the old one
 

// User.deleteOne({name:"Adam"}).then((res) => {
//     console. log(res);
// }); 
  
// User.deleteMany({age:{ $gt: 40 }}).then((res)=>{
//     console.log(res);
// });
 
// User.findOneAndDelete({age:{$gt:45}})
// .then ((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });;