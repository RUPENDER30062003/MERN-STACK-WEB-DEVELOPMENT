let arr = [1, 2, 3, 4, 5];
function print(el) {
    console.log(el);
}
arr.forEach(print);
// OR
arr.forEach( function(el){
    console.log(el);}
);
arr.forEach(el=>{console.log(el);});

let arr1=[
    {name:"rupender",mark:95.5,},
    {name:"rupendersingh",mark:92.4},
    {name:"rupender2",mark:97.3}];
arr.forEach(student=>{console.log(student.marks)});

let num = [1, 2, 3, 4];

let double = num.map(function (el){
    return el*2;}
);

let triple=num.map((el)=>{el*3;});

let gpa=arr1.map((el)=>{Math.floor((el.mark)/10)});

let nums =[2, 4, 1, 5, 6, 2, 7, 8, 9];
let even =nums.filter((num)=>(num % 2 == 0));


[1, 2, 3, 4].every((el) => (el%2 == 0));
[2, 4].every((el) => (el%2 == 0));

[1, 2, 3, 4].some( (el) => (el%2 == 0));
[1, 3].some( (el) => (el%2 == 0));

let REDUCE=[0,1, 2, 3, 4].reduce ( (res, el) => { console.log(res); return res+el;} );
console.log(REDUCE);

let nums2 = [2, 3, 4, 5, 3, ,11,4, 7, 8, 1, 2];
 let result = nums2. reduce( (max, el) =>{
     if(el > max) {
         return el;
     } else {
         return max;
     }
});

let nums2max=nums2.reduce((max,el)=>{Math.max(max,el)});

console.log(result);

let nums10=[10,20,30,40,50];
let array_10=nums10.every((el)=>(el%10==0));
console.log(array_10);

function sum(a,b=3){
    return a+b;
};

// spread //
let arrs=[1, 2, 3, 4, 5];
console.log(Math.min(...arrs));
console.log (...arrs);
console.log (..."apnacollege");

let arrsp = [1, 2, 3, 4, 5];
console.log(arrsp);
let newArrsp = [...arr];
 console.log(newArrsp);
let chars = [... " hello"];
console.log(chars);
  
let oddsp = [1, 3, 5, 7, 9];
let evensp = [2, 4, 6, 8, 10];
let numsp =[...oddsp, ...evensp];

let datasp ={
  email: "ironman@gmail.com",
  password:"abcd",
};

let dataCopy ={...datasp,id: 123};
let arr_sp_ol = [1, 2, 3, 4, 5]; //val
let obj1={...arr_sp_ol }; // key->value == index->arr_sp_ol element // 
let obj2={..."hello"};

// rest //
function sumargs(...args) {
    for(let i=0;i<args.length;i++){
        console.log("you gave us:",args[i]);
    }
    return args.reduce((add, el) => add + el);
} 

function minar(a,b,c,d){
    console.log(arguments);
    console.log(arguments.length);
}

minar(1,2,3,4);
// argument is a collection not array //
//hence arguments.length; give no error //
// whereas arguments.push(1); give error // 

function sum(){
   return arguments.reduce((sum, el) => sum + el);
}

function sumargs1(...args){
    return args.reduce((sum,el)=>sum+el);
}
      
function minargs(msg, ...args){
    console. log (msg);
    return args. reduce( (min, el) =>{
    if (min > el) {
       return el;
    } else {
       return min;
    }});
}


// Destructuring //
let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup); //"tony" "bruce"
let [best,...other]=names;
console.log(best,other);

const student ={
  name: "karan",
  class: 9,
  age: 14,
  subjects: ["hindi", "english", "math", "science", "social studies"],
  username: "karan123",
  password: 1234,
};

let username=student.username;
let password=student.password;

const {username: user, password: pass,city="mumbai",birth:place="delhi"}=student;
console. log(user); //"karan123"
console.log(pass);


let doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map(el=>el*2)];;
console.log(doubleAndReturnArgs([1,2,3],4,4));


const mergeObject=(ob1,ob2)=>({...ob1,...ob2});
console.log(mergeObject({a:1,b:2},{c:3,d:4}));

const square_sum=square_sum_array.reduce((sq_sum,el)=>{sq_sum+(el*el)});
const plus_five=plus_five_array.map(el=>el+5);
const upper_case_words=upper_case_words_array.map(el=>el.toUpperCase());

