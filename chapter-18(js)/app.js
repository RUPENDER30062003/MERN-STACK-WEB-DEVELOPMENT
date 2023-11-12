function hello(){
    console.log("hello");
}

hello();
hello();

function print1to5(){
    for(var i=1;i<=5;++i){
        console.log(i);
    }
}

print1to5();

function dice() {
    console.log (Math.floor(Math.random()*6)+1);
}

dice();
dice();



function printname(name) {
    console.log(name);
}

printname("rupender");

function nameage(name,age) {
    console.log(name);
    console.log(age);
}
nameage("rupender singh",34);


function sum(a,b){
    console.log(a+b);
}

sum(6,7);

function average(a,b,c){
    let avg=(a+b+c)/3 ;
    console.log(avg);
} 

average(23,34,45);

function table(n) {
    for(let i=1;i<11;i++){
        console.log(n*i);
    }
}
table(9);

function sumab(a,b) {
    return a+b;
}

sumab(32,43);
console.log(sumab(23,43));
console.log(sumab(34,sumab(36,32)));

function oneton(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

function concatination(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}

const sumaandb = function (a, b) {
    return a + b;
}

console.log(sumaandb(2, 3));

let hello1=function(){
    console.log("hello function expression");
}

hello1();
hello1=function(){
    console.log("namaste");
}
hello1();

function multipleGreet(func, n) {
    for(let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console. log("hello");
}
multipleGreet(greet,20);
multipleGreet(function() {console. log("hello");},28);
// multipleGreet(greet(),20);   give error

function oddEvenTest(request) {

    if(request == "odd") {
        
        return function (n){
            console. log(!(n%2 == 0));
        }

    }else if(request == "even"){
        
        return function(n){
            console. log(n%2 == 0);
        }

    }else{
        console. log("wrong request");
    }
}

let req=oddEvenTest("even");
console.log(req(67+1));

const calculator = {
    add:function(a, b) {
        return a + b;
    },
    sub:function(a, b) {
        return a - b;
    },
    mul:function(a, b) {
        return a * b;
    }
}

console.log(calculator.add(2,3));

const calculator1 ={
    add(a, b) {
         return a + b;
    },
    sub(a, b) {
         return a - b;
    }
}
console.log(calculator1.add(23,34));

let country=["Australia","Germany","UnitedStatesofAmerica"];
let ansindex=0;

for(let i=1;i<country.length;i++){
    let anslength=country[ansindex].length;
    let currind=country[i].length;
    if (currind>ansindex) {
        ansindex=i;
    }
}
console.log(country[ansindex]);

function range(start,end){
    let ans=Math.floor(Math.random()*(end-start)+1)+start;
    console.log(ans);
    return ans;
} 
range(2,5);





