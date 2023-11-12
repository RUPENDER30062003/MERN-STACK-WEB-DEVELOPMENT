
// function savetoDb(data,success,failure){
//     let internetSpeed = Math. floor (Math. random() * 10) + 1;
//     if (internetSpeed > 6) {
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb(
//     "Apna Collage",
//     ()=>{
//         console.log("success1: your data was saved ");
//         savetoDb(
//             "hello world",
//             ()=>{
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "shradha",
//                     ()=>{
//                         console.log("success3:data3 saved");
//                     },

//                     ()=>{
//                         console.log("failure3:week connection");
//                     }
//                 )
//             },

//             ()=>{
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },

//     ()=>{
//         console. log ("weak connection. data not saved");
//     }
//);

let h1=document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            h1.style.color=color;
            resolve("color changed!");
            },
        delay);
    });
}

changeColor("red", 1000)
.then((result)=>{
    console. log("red color was completed");
    return changeColor("orange", 1000);
})
.then((result)=>{
    console.log("orange color was completed");
    return changeColor("green", 1000);
})
.then((result)=>{
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then((result)=>{
   console. log("blue color was completed");
})
.catch((error)=>{
    console.log("error occur");
    console.log(error);
})
