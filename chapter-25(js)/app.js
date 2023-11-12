
// async function greet() {
//     // throw("404 page not found");
//     return "hello world!"; //returns a promise
// }

// let hello=async()=>{return 5;}; //returns a promise

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was :",result);
// })
// .catch((error)=>{
//     console.error("promise was rejected with err:", error);
// })

// function getNum(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             let num= Math. floor (Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }

// demo();

// let h1=document.querySelector("h1");

// function colorChange(colors,time){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             h1.style.color=colors;
//             console.log(`color changed to ${colors}!`);
//             resolve("color changed");
//         },time);
//     });
// }

// async function show(){
//     await colorChange("violet", 1000);
//     await colorChange("indigo", 1000);
//     await colorChange("green", 1000);
//     await colorChange("yellow", 1000);
//     await colorChange("orange", 1000);
//     colorChange("blue",1000);
// }

// show();


// let h2=document.querySelector("h2");

// function colorChange1(colors,time){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }
//             h2.style.color=colors;
//             console.log(`color changed to ${colors}!`);
//             resolve("color changed");
//         },time);
//     });
// }

// async function show1(){
//     await colorChange1("violet", 1000);
//     await colorChange1("indigo", 1000);
//     await colorChange1("green", 1000);

//     let a=5;
//     console.log(a);

//     await colorChange1("yellow", 1000);
//     await colorChange1("orange", 1000);
//     colorChange1("blue",1000);
// }
// show1();


// let h3=document.querySelector("h3");

// function colorChange2(colors,time){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("promise rejected");
//             }
//             h3.style.color=colors;
//             console.log(`color changed to ${colors}!`);
//             resolve("color changed");
//         },time);
//     });
// }

// async function show2(){

//     try{
//     await colorChange2("violet", 1000);
//     await colorChange2("indigo", 1000);
//     await colorChange2("green", 1000);
//     await colorChange2("yellow", 1000);
//     await colorChange2("orange", 1000);
//     }catch(err){
//         console.log("error caught:",err);
//     }
//     let a=5;
//     console.log(a);
// }

// show2();