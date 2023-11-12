
function savetoDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed = Math. floor (Math. random() * 10) + 1;
        if(internetSpeed > 4) {
            success("success1 :data was saved");
        }else{
            failure("failure1: week connection");
        }  
    });
}
// console.log(savetoDb("apna collage"));

function savetoDbresolvereject(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math. floor (Math. random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("success2 : resolve data was saved");
        }else{
            reject("failure2: reject week connection");
        }  
    });
}

// console.log(savetoDbresolvereject("apna collage"));

// let request = savetoDbresolvereject("apnacollege");
// request.then(()=>{
//     console.log(request);
//     console.log("promise3 resolved");
// }).catch(()=>{
//     console.log(request);
//     console.log("promise3 rejected");
// })

// console.log("hello");

// savetoDb("apnacollege")
//     .then(()=>{
//         console. log( "promise1 resolved");
//         savetoDb("helloworld").then(()=>{
//             console. log("promise2 resolved");
//         });
//     })
//     .catch(()=> {
//      console. log("some promise rejected");
// });

// savetoDb("apna.college")
//     .then (()=>{
//         console.log("data5 saved");
//         return savetoDb("helloworld");
//     })
//     .then(()=>{
//         console.log("data6 saved");
//         return savetoDb("shradha");
//     })
//     .then(()=>{
//         console.log("data7saved");
//     })
//     .catch(()=>{
//         console. log ("promise was rejected");
//     });

savetoDb("apna college")
    .then((result) => {
      console.log ("data1 saved");
      console.log(result);
      return savetoDb("helloworld");
    })
    .then((result) => {
      console.log("data2 saved");
      console.log(result);
      return savetoDb("shradha");
    })
    .then((result) => {
      console.log("data3 saved");
      console.log(result);
    })
    .catch((error) =>{
        console.log("promise was rejected");
        console.log(error)
    });





 


