// Event bubbling

// let div = document. querySelector("div");
// let ul= document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console. log("div was clicked");
// });

// ul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console. log("ul was clicked");
// });

// for (li of lis) {
//     li.addEventListener("click", function ( event) {
//     event.stopPropagation();
//     // console. log("li was clicked");
// });
// }

let newbtn = document.querySelector("#newbtn");
let newul= document.querySelector("#newul");
let newinp= document.querySelector("#newinput");

newbtn.addEventListener("click", function(){

   let item=document.createElement("li");
   item.innerText=newinp.value;

   let delbtn=document.createElement("button");
   delbtn.innerText="delete";
   delbtn.classList.add("delete");

   item.appendChild(delbtn);
   newul.appendChild(item);
   newinp.value="";

});

// event delegation //
newul.addEventListener("click",function(e){
    console.dir(e);
    // console.log(e.target);
    // console.log("button clicked");
    // console.dir(e.target.nodeName);
    if (e.target.nodeName =="BUTTON"){
        let listitem=e.target.parentElement;
        listitem.remove();
    }
});

// let delbtn1=document.querySelectorAll(".delete");
// for(delbtn2 of delbtn1){
//     delbtn2.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//     });
// }
// the above code work for only alredy task not for newly created task delete button //
