
/*
for(let i=0;i<=5;i++){
    console.log(i);
}
console.log("backward");
for(let i=10;i>=0;i--){
    console.log(i);
}

let n=prompt("enter number of which you want table");
n=parseInt(n);
for(let i=1;i<=10;i++){
    console.log(i*n);
}

console.log("while");
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// let movie='raaz';
// let fav=prompt("enter movie");
// while(fav!="quit" && fav!="movie"){
//     fav=prompt("enter again or 'quit'");
// }

// if(fav=='raaz'){
//     console.log("congratulation");
// }else{
//     console.log("oh! you quit");
// }

let fruits=[['a','b','c'],['d','e','f']];
for (fruit of fruits) {
    console.log(fruit);
}

for (char of "apnacollage") {
    console.log(char);
}

let heroes=[["ironman","spiderman"],["flash","superman"]];
for (list of heroes) {
    for (member of list) {
        console.log(member);
    }
}

*/

let todo=[];
let req=prompt("please enter your request");

while(true){

    if(req=="quit"){
        
        console.log("quitting app");
        console.log("----------");
        break;

    }else if(req=="list"){

        if(todo.length==0){
           
            console.log("no task");
            console.log("----------");

        }else{

            console.log("tasks are:");
            for (task of todo) {
                console.log(task);
            }
            console.log("----------");

        }
    }else if (req=="add") {

        let task=prompt("please enter the task you want to add");
        todo.push(task);

        console.log("tasks added");
        console.log("----------");

    }else if (req=="delete") {

        let deletetask=prompt("enter task you want to delete");
        let index=todo.indexOf(deletetask);
        if(index!=-1){
            todo.splice(index, 1);//remove one item from array at given position
            console.log("task deleted");
            console.log("----------");
        }else{
            console.log('invalid input');
            console.log("----------");
        }
        

    }
    req=prompt("please enter your request");

}


