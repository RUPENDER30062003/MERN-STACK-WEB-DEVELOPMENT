let btn=document.querySelector("button");
console.dir(btn);

btn.onclick=function (){
    alert("button clicked");
    console.log('clicked');
}

function sayHello(){
    console.log("hello");
    alert("hello");
}
btn.onclick=sayHello;

let btns = document.querySelectorAll("button");
for (let i=1;i<btns.length;i++) {
    // btns[i].onclick = sayHello1; // not sayHello1() as it execute function suddenly we have to write it as sayHello1;
    // btns[i].onclick=sayname;
    // btns[i].onmouseenter=function(){
    //     console.log("you enter a button");
    // }
    // btn[i].addEventListener("click",sayHello1);
    // btn[i].addEventListener("click",sayname);
}

function sayHello1(){
    alert("Hello!");
}  

function sayname(){
    alert("Apna");
}
  