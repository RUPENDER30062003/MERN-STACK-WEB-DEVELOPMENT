let p=document.createElement('p');
p.innerHTML="Hi i'm Red";
p.classList.add('red');
let body=document.querySelector('body');
body.append(p);

let h3=document.createElement('h3');
h3.innerHTML="I am a blue h3!";
h3.classList.add('blue');
body.append(h3);

let div=document.createElement("div");
div.classList.add("box");

let h1=document.createElement("h1");
h1.innerHTML="i am in a div";
div.append(h1);

let p1=document.createElement('p');
p1.innerHTML="Me Too!";
div.append(p1);

body.append(div);

let input=document.createElement("input");
input.setAttribute("placeholder","username");
body.append(input);
let btn=document.createElement("button");

btn.innerHTML="click me!";
btn.setAttribute("id","btn");
body.append(btn);

let newh1=document.createElement("h1");
newh1.innerText='Dom Practice!';
newh1.classList.add("purple");
body.append(newh1);

let last_p=document.createElement("p");
last_p.innerHTML="Apna Collage <b> Delta</b> Practice";
body.append(last_p);