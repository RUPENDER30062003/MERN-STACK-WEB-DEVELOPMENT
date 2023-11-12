// let n = 5;
//  for (let i=0 ; i<n ; i++) {
//    console. log("hello, ", i);
//  }

//  console.log(process.argv);

//  let args=process.argv;
//   for(let i=2;i<args.length;i++){
//     console.log("hello & welcom to",args[i]);
//   }

// const math=require("./math");
// console.log(math);
// console.log(math.sum(2,2));

// const fruit=require("./fruits");
// console.log(fruit);
// console.log(fruit[0].name);

// const figlet = require("figlet");
// figlet("rupender", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

import {sum,mult,pi} from "./math.js";
console.log(sum(2,4));
console.log(mult(2,3));
console.log(pi);

import {generate} from "random-words";
console.log(generate());
