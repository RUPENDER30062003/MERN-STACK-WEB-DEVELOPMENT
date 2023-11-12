let delhi={
    longitude:"23.7041'N",
    latitude:"77.1025'E"
}

const student={
    name:"rupender",
    age:23,
    marks:94.4,
}

const item={
    price:100.99,
    discount:50,
    color:["red","yellow"]
}

const twitterthread={
    username:"rupender",
    content:"coding",
    likes:34,
    reposts:12,
    tags:["@apnacollage","@delta"],
}

console.log(student["name"]);
console.log(student.marks);
console.log(student.age);

let prop="price";
console.log(item[prop]);

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:'d',
    undefined:'e',
}

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[true]);
console.log(obj[undefined]);
console.log(obj.null);
console.log(obj.undefined);
console.log(obj.true);
// console.log(obj.1);
// console.log(obj.2);  give error

const student1={
    name:"shradha",
    age:23,
    marks:94.4,
    city:"delhi",

}

student1.city="Mumbai";
student1.marks="A";
student1.gender="female";
console.log(student1);
console.log(delete student1.age);
console.log(student1);

const classInfo={
    aman:{
        rollno:1,
        city:"delhi"
    },
    shradha:{
        rollno:2,
        city:"mumbai"
    },
    karan:{
        rollno:3,
        city:"kolkata"
    }
}

console.log(classInfo.aman);
console.log(classInfo.shradha.city);

const classInfo1 = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A+",
        city: "Pune"
    },
    {   name: "karan",
        grade: "0",
        city: "Mumbai"
    }
]

console.log(classInfo1);
console.log(classInfo1[0]);
console.log(classInfo1[1].city);
console.log(classInfo1[2]);

console.log(Math.floor(Math.random()*10+1));
console.log((Math.floor(Math.random()*100)+1));
console.log(Math.floor(Math.random()*5+1));
console.log(Math.floor(Math.random()*5+21));

let n=prompt("enter maximum number");
const random=Math.floor(Math.random()*n)+1;
console.log(random);
let guess=prompt("guess the number");
while(true){

    if (guess=="quit") {
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("you are right");
        break;
    }else if( guess<random){
        console.log("you guess wrong ");
        guess= prompt("your guess was wrong and small.please try again");
    }else{
        console.log("you guess wrong ");
        guess= prompt("your guess was wrong and big .please try again");   
    }
    
}
