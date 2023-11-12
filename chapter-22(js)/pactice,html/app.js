let btn=document.querySelector("button");

function getrc(){
    let red = Math. floor (Math. random() * 255);
    let green = Math. floor (Math. random() * 255);
    let blue = Math. floor(Math. random() * 255);

    let color=`rgb(${red},${green},${blue})`;
    return color;
}

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let randomcolor=getrc();
    h1.innerText=randomcolor;

    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;
    console.log("generate random color and updated");
});


let p=document.querySelector("p");
p.addEventListener("click",function(){
    console.log("parah was clicked");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside box");
});

let bttn=document.querySelector(".bttn");
bttn.addEventListener("click",function(){
    console.log(this);
    this.style.backgroundColor="blue";
})

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

 h2.addEventListener("click", function(){
    console.dir(this.innerText);
    this.style.backgroundColor ='blue';
 })

  h3.addEventListener("click", function ( ) {
    console. dir(this.innerText);
    this.style.backgroundColor= "blue";
  });
  
  function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor ="green";
  }
  
  h2.addEventListener("click", changeColor);
  h3.addEventListener("click", changeColor);

  let span=document.querySelector("span");
  span.addEventListener("click",function(eventargument){
    console.log(eventargument);
    console.log("span clicked");
  })

  span.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("span double clicked");
  })


let inp=document.querySelector("input");

inp.addEventListener("keydown",function(eventargument){

        console.log(`key=${eventargument.key}`);
        console.log(`KeyCode=${eventargument.code}`);
        console.dir(eventargument);
        console.log("key was pressed");

        if (eventargument.code="ArrowUp"){
            console.log("character moves forward");
        } else if (eventargument.code == "ArrowDown"){
            console. log("character moves backward");
        } else if (eventargument.code == "ArrowLeft") {
            console. log("character moves left");
        } else if (eventargument.code == "ArrowRight") {
            console. log("character moves right");
        }
    }
);  

inp.addEventListener("keyup",function(eventargument){
    console.dir(eventargument);
    console.log("key was up");
});

let form = document.querySelector("form");
form.addEventListener("submit", function (event){
    event.preventDefault(); // prevent our page from action to be done after event submit  
    let inp=form.querySelector("input");
    console.dir(inp);
    console.log(inp.value);
    console.log("form submitted to page");
    alert("form submitted")

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    let user1 = this.elements [0]; //form.element[0]
    let pass2 = this.elements [1];

    console.log(user1.value);
    console.log(pass.value);
    alert(`Hi ${user.value},your password is:${pass.value}`);

});


let user = document.querySelector("#user");
user.addEventListener("change",function(){
  console. log("change event");
  console. log("change final value = ",this.value);
});

user.addEventListener("input", function () {
    console. log("input event");
    console. log("input final value = ", this.value);
});

let inptext = document.querySelector("#text");
let spa=document.querySelector("#span");

inptext.addEventListener("input",function(){
   console.log(inptext.value);
   spa.innerText=inptext.value;
});

let mouse=document.querySelector("#mouseid");
mouse.addEventListener("mouseout",function(){
    console.log('mouse out');  
});

let keypress=document.querySelector("#keypress");
keypress.addEventListener("keypress",function(){
    console.log("keydown press");
});

// window.scroll({
//     top: 500,
//     left: 100,
//     behavior: "smooth",
//   });

document.querySelector("#scroll").addEventListener("click",()=>{
    window.scroll({
            top: 500,
            left: 100,
            behavior: "smooth",
          });
});

const mediaElem = document.querySelector("#videos");
mediaElem.load();
