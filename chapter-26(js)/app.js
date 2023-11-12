// let btn=document.querySelector("button");

// btn.addEventListener("click",async()=>{
//    console.log("button was clicked");
//    let fact= await getFacts();
//    console.log(fact);
//    document.getElementById('result').innerHTML = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts1 (){
//   try {
//      let res = await fetch (url);
//      let data = await res.json();
//      console. log (data.fact);
//      let res2 = await fetch (url);
//     let data2 = await res2.json();
//     console. log (data2.fact);
//    }
//     catch (e) {
//     console. log ("error"- e); 
//     console. log ("bye");
//     }
// }

// async function getFacts(){
//     try {
//       let res = await axios.get(url);
//       console.log (res);
//       console.log(res.data.fact);
//       return res.data.fact;
//     }
//       catch (e) {
//       console. log ("ERROR - ", e);
//       return "No fact found"
//       }
//     }


// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn1=document.querySelector("#btn");
// btn1.addEventListener("click",async()=>{
//     let link=await getImage();
//     let img=document.querySelector("#result1");
//     img.setAttribute("src",link);
//  });

//  async function getImage () {
//     try {
//       let res = await axios.get(url2);
//       return res.data.message;
//     }
//     catch (e) {
//       console. log ("ERROR - ", e);
//       return "No fact found"
//     }
//  }


    let url3="https://icanhazdadjoke.com/";
    // const config ={headers:{Accept:"application/json"} };
    // let res =axios.get(url3,config);
    // console.log(res.data);
    async function getJokes(){
        try {
          const config = {headers:{Accept:"application/json"}};
          let res = await axios.get(url3, config);
          console.log(res.data);
        }
        catch (err){
        console.log(err);
        }
    }
    getJokes();

    
    // http://universities.hipolabs.com/search?name=middle
    // http://universities.hipolabs.com/search?name=middle
    // http://universities.hipolabs.com/


    let url4="http://universities.hipolabs.com/search?name=";

    async function getColleges(country) {
        try {
           let res = await axios.get(url4 + country);
           return res.data;
        }
        catch (e) {
           console. log("error : : ", e);
           return[];
        }
    }

    let btn3=document.querySelector("#Searchbtn");
    btn3.addEventListener("click", async()=>{
        let country=document.querySelector("input").value;
        let colleges= await getColleges(country);
        console.log(colleges);
        show(colleges);
    });

    function show(colArr){
        let list=document.querySelector("#list");
        list.innerText="";
        for(col of colArr){
            console.log(col.name);
            let li=document.createElement("li");
            li.innerHTML=col.name;
            list.appendChild(li);
        }
    }
