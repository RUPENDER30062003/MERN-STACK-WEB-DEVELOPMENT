 let para1=document.createElement("p");
para1.innerText="Hey I'm red!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3=document.createElement("h3");
h3.innerText="I'm a blue h3!";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let division=document.createElement("div");
let h1=document.createElement("h1");
let para2=document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText="ME TOO!!";

division.append(h1);
division.append(para2);
division.classList.add("box");
document.querySelector("body").append(division);

let input=document.createElement("input");
input.type="text";
input.setAttribute("placeholder","username");
let btn=document.createElement("button");
btn.innerHTML="<b>Click Me</b>";
btn.setAttribute("id","btnnew");

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

document.querySelector("#btnnew").classList.add("bluebgwhitecolor");

let newheading=document.createElement("h1");
newheading.innerHTML="<u>DOM practice</u>";
newheading.style.color="purple";
document.querySelector("body").prepend(newheading);

let newpassage=document.createElement("p");
newpassage.innerHTML="Apna college <b>Delta<b> Practice";
document.querySelector("body").prepend(newpassage);