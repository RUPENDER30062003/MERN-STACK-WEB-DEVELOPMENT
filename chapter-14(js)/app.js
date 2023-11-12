console.log("hello world");
console.log("Apna Collage");
let a=5;
let b=3;
console.log(a+b);
let output="price of all iteams :"+(5+6+3)+" rupees";
console.log(output);
let newoutput=`price of all iteams: ${5+7+4} rupees`;
console.log(newoutput);

let c=10;
let d=5;
let e=5;
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**d);
console.log(e++);
console.log(++e);
console.log(e--);
console.log(--e);
console.log(e=c);
console.log(c+=2);
console.log(c-=3);
console.log(c*=2);
console.log(c/=2);
console.log(c%=2);
let age=18;
console.log(age>18);

let age2=18;
if(age2>18){
    console.log('you can vote');
}else{
    console.log('you cannot vote');
}

let color="red";
if(color=="red"){
    console.log("Stop");
}
if(color=="green"){
    console.log("Go");
}
if(color=="yellow"){
    console.log("Slow down");
}

if(color=="red"){
    console.log("Stop1");
}else if(color=="green"){
    console.log("Go1");
}else if(color=="yellow"){
    console.log("Slow down1");
}else{
    console.log("error")
}

let size="xl";
if (size="xl") {
    console.log("price is 250");
} else if( size="l"){
    console.log("price is 200");
}else if(size="m"){
    console.log("price is 100");
}else if(size="s"){
    console.log("price is 50");
}
    
let marks=34;

if(marks >= 33){
    console.log("pass");
    if (marks>=80) {
        console.log("Grade :O");
    } else {
        console.log("Grade :A");
    }
}else{
    console.log("Better luck next time");
}

let marks1=90;
if(marks1>=33 && marks1>=80){
    console.log("pass1");
    console.log("A++");
}

let string="apple";
if(string[0]==='a' && string.length>3){
    console.log("good String");
}else{
    console.log("not a good String");
}

let color3="red";

switch(color3){
     case "red" :
         console.log("stop");
         break;
     case "yellow" :
         console.log("slow down");
         break;
     case "green" :
         console.log("GO");
         break;
    default : 
         console.log("Broken Light");
}

console.log("after switch stt")

let day=1;
let dayvalue=day%7;
switch (dayvalue) {

    case 0:
        console.log("sunday");
        break;
    
    case 1:
        console.log("monday");
        break;

    case 2:
        console.log("tuesday");
        break;

    case 3:
        console.log("wednesday");
        break;

    case 4:
        console.log("thursday");
        break;

    case 5:
        console.log("friday");
        break;

    case 6:
        console.log("saturday");
        break;
}

alert("something is wrong")
console.log("this is a simple log");
console.error("this is a error msg");
console.error("this is a error msg");
console.warn("this is warning");

prompt("enter your name");
let roll=prompt("enter your rollno");
console.log(`your rollno :${roll}`);

let first_name=prompt("enter your first name");
let last_name=prompt("enter your last name");
alert(first_name+" "+last_name);
console.log(first_name+" "+last_name);
