 const student={
    name:"rupender",
    age:23,
    eng:95,
    math:93,
    phy:97,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks=${avg}`);
    }
 }

function getAvg(){
   console.log(this);
}

alert("hello");
window.alert("hello");
window.getAvg();
student.getAvg();

try{
    console.log(a);
}catch(err){
    console.log(err);
    console.log("variable a doesn't");
}

const sum=(a,b)=>{
    console.log(a+b);
}

const cube=(a)=>{
    console.log(a*a*a);
}

const power=(a,b)=>{
    let result=1;
    for(let i=1;i<=b;i++){
        result*=a;
    }
    console.log(result);
}

const mul=(a,b)=>(a*b);
const sq=m=>m*m;
const print=n=>{console.log(n);}
const arr=[40,-68,"abc","xyz"];

console.log("hi there!");
setTimeout(()=>{console.log("Apna College");},4000);
console.log("welcome to");

let id1= setInterval(()=>{console.log("Apna College")},2000);
console.log(id1);
let id2= setInterval(()=>{console.log("hello world")},3000);
console.log(id2);

clearInterval(id1);
clearInterval(id2);

