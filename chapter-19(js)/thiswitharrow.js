let marks=23;

const student ={
    name:"aman",
    marks:95,
    prop:this, // global scope //
    getName: function(){
        console.log(this.marks);
        return this.name;
    },
    getMarks:()=>{
        console.log(this); // parent's scope
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{console.log(this);},2000); // student //
    },
    getInfo2:function(){
        setTimeout(function(){console.log(this);},2000); // window 
    }
};

let square=n=>n*n;
console.log(square(3));

let fivehello=setInterval(()=>{
        console.log("Hello");
},2000);

setTimeout(()=>{
    console.log("clear interval");
    clearInterval(fivehello);
},10000);

let averagearray=(arr)=>{
    let n=arr.length;
    let avg=0;
    for(let i=0;i<n;i++){
        avg+= arr[i];
    }
    avg/=n;
    return avg;
}

let even=n=>n%2==0;