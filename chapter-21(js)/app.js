document.all[8].innerText="Peter Parker spiderman";

let imgObj=document.getElementById("mainImg");
console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.src);
console.log(imgObj.id);

let par=document.getElementById("description");
console.dir(par);
let nullObject=document.getElementById("abc");
console.log(nullObject);

let elementsclassname= document.getElementsByClassName("oldImg");
console.log(elementsclassname);
console.dir(elementsclassname);
console.log(elementsclassname[0]);
for(let i=0;i<elementsclassname.length;i++){
    console.log(elementsclassname[i]);
}

console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("span"));

console.log(document.querySelector('p')); //Selects first p element
console.log(document.querySelector('#myId')); //Selects first element with id = myId
console.log(document.querySelector('.myClass')); //Selects first element with class = myClass
console.log(document.querySelectorAll("p")); //Selects all p elements

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));

console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));

let para=document.querySelector("p");
console.log(para);
console.dir(para);
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

let heading=document.querySelector('h1');
/* Selecting h1 tag */
heading.innerHTML=`<u>${heading.innerText}</u>`;

let img1=document.querySelector('img');
console.log(img1);
console.log(img1.getAttribute('id'));
console.log(img1.setAttribute('id','spidermanImg'));
console.log(img1.getAttribute('id'));

 let heading1=document.querySelector("h1");
 console.log(heading1.style);
 heading1.style.color="green";

 let links=document.querySelectorAll(".box a");
 for(let i=0;i<links.length;i++){
    links[i].style.color="yellow";// inline style //
 }

 for(link of links){
    link.style.color="red";
 }

 let img2=document.querySelector('img');
 console.log(img2.classList);

 let heading3=document.querySelector("h1");
 console.log(heading3.classList);
//  heading3.classList.add("xyz");
//  console.log(heading3.classList);


let heading4 = document.querySelector('h1');
// heading4.classList.add('green');
// heading4.classList.add('underline');
// heading4.classList.remove('green');
// heading4.classList.remove('green');
// heading4.setAttribute('class','green');
// heading4.setAttribute('class','underline');
// console.log(heading4.classList.contains("underline"));
// heading4.classList.toggle("green");
// heading4.classList.toggle("underline");

let box=document.querySelector(".box");
box.classList;
box.classList.add("yellowbg");


let h4=document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children);

let box1=document.querySelector(".box")
console.log(box1.children,box1.childElementCount);

let ul=document.querySelector('ul');
console.log(ul.parentElement,ul.childElementCount,ul.children,ul.children[1],ul.children[2].previousElementSibling,ul.children[0].nextElementSibling);

let img3=document.querySelector('img');
img3.previousElementSibling.style.color="gold";

let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi, I am a new p";
console.dir(newP);
let body = document.querySelector('body');
console.log(body.appendChild (newP));

let newpp=document.createElement('p');
newpp. innerText = "Hi, I am a new p";

let box2 = document.querySelector('.box');
box2.appendChild(newpp);

let btn = document.createElement('button');
console.dir(btn);
btn.innerText="click me!";
box2.appendChild(btn);

box2.append ("this is new text");
box2.append(btn);
box2.append("donot click this button");

let btn2=document.createElement("button");
btn2.innerHTML="New Button !!!";
let p4=document.querySelector('p');
p4.insertAdjacentElement('beforebegin',btn2);

// let body1=document.querySelector('body');
// body1.removeChild(btn2);
// р.insertAdjacentElement('afterend',btn2);

btn2.remove();
