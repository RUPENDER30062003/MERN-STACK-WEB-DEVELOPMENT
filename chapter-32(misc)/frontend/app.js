
let arr=[1,2,3];
arr.sayHello=()=>{
    console.log('hello');
};

arr.__proto__.push=()=>{
  console.log("pushing");
}

let arr2=[4,5,6];
arr.sayHello=()=>{
    console.log('hello');
};

Array.prototype.wish=()=>{console.log("hello");}; 

console.log(arr.sayHello===arr2.sayHello);//refernece to different objects
console.log("abc".toUpperCase==="xyz".toUpperCase); // refernce to same thing

// Factory function //
function PersonHaker(name,age) {
    const person ={
     name: name,
     age: age,
     talk(){
       console. log(`Hi, my name is ${this.name}`);
     }
    }
    return person;
}

let p1=PersonHaker("adam",25);
let p2=PersonHaker("eve",24);
console.log(p1.talk===p2.talk);// both have different copies in both object which is not good for memory

//Constructors - doesn't return anything & start with capital
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.talk=function(){
    console. log(`Hi, my name is ${this.name}`);
}

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 25);
console.log(p3.talk===p4.talk); // both have reference to same function.


class Persons {
    constructor(name, age) {
      console.log("person class constructor called");
      this. name = name;
      this. age = age;
    }
  
    talk(){
      console.log(`Hi, my name is ${this.name}`);
    }
  
}


let p5 = new Persons("adam", 25);
let p6 = new Persons("eve", 25);
console.log(p5.talk===p6.talk); // both have same reference //

class Student extends Persons{
  constructor(name,age,marks){
    console.log("Student class constructor called");
    super(name, age); // parent class constructor is being called //
    this.marks = marks;
  }
  greet(){
    return "hello!"," ",this.name ;
  }
}

let s1 = new Student ("adam", 25, 95);

class Teacher extends Person{
  constructor(name,age,subject){
    super(name,age);
    this.subject=subject;
  }
}

let t1=new Teacher("suman",32,"english");



// parent class //
class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";// variable not declared but still used //
    }
    eat(){
      consolelog ("i am eating");
    }
}

//derived class //
class Dog extends Mammal {
    constructor(name) {
      super(name);
    }
    bark() {
      console. log("wooff..");
    }  
    eat(){
        console.log("dog is  eating");
    }// function overriding //
}

// derived class //
class Cat extends Mammal{
  constructor(name){
    super(name);
  }
  meow(){
    console.log("meow...");
  }
}

let dog1 = new Dog("tuffie");
dog1.eat();