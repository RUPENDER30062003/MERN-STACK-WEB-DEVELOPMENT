// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const Chat=require("./models/chat.js");


let allChats=[
    {from:"neha",
    to:"priya",
    msg:"send me notes for the exam",
    created_at:new Date()
    },
    {from:"rohit",
    to:"mohit",
    msg:"teach me JS callback",
    created_at:new Date()
    },
    {to:"amit",
    from:"sumit",
    msg:"all the best",
    created_at:new Date()
    },
    {to:"tony",
    from:"peter",
    msg:"love you 3000",
    created_at:new Date()
    },
];

Chat.insertMany(allChats);

