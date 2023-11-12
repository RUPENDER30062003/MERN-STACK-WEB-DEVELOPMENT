let msg="   hello  ";
msg=msg.trim();
console.log(msg);
// let password=prompt("enter your password");
// password=password.trim();
// console.log(password);

let str="Random string";
let lower=str.toUpperCase();
let upper=str.toLowerCase();
console.log(`${str} ${lower} ${upper}`);

let mesg="ilovecoding";
console.log(mesg.slice(1,4));
console.log(mesg.indexOf("i"),mesg.indexOf("love"),mesg.indexOf("j"));

let mesag="         hello              ";
console.log(mesag);
let newmesag=mesag.toUpperCase().trim();
console.log(newmesag)


let messg="apnacollage";

console.log(messg.slice(4));

let messsg="ilovecoding";
console.log(messsg.replace("love","do"));
console.log(messsg.repeat(2));

let student=["a","b","c"];

let month=["jan","jul","mar","au"];
month.shift();
let temp=month.shift()
month.unshift("jun");
month.unshift(temp);
console.log(month);

let primary=['r','y','b'];
console.log(primary);
let secondary=['o','g','v'];
let newconcat=primary.concat(secondary);
let newreverse=primary.reverse();
console.log(primary);
console.log(secondary);
console.log(newconcat);
console.log(newreverse);

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0, 1));
console.log(colors);
console.log(colors.splice(0, 1, "black", "grey"));
console.log(colors);

let cars=["audi","bmw","xuv","maruti"];
console.log(cars.splice(3));
console.log(cars);
console.log(cars.splice(0,1));
console.log(cars);
cars.push("maruti");
cars.push("ferrari");
console.log(cars);
console.log(cars.splice(1,2));
console.log(cars);
console.log(cars.splice(0,0,"toyota","xuv","maruti"));
console.log(cars);
console.log(cars.splice(1,0,"mercedes"));
console.log(cars);
console.log(cars.splice(1,1,"gwagon"));
console.log(cars);
cars.sort();
console.log(cars);

let language=['c','c++','html','js','python','java','c#','sql'];
language.reverse();
console.log(language.indexOf('js'));

let months=["jan","jul","mar","au"];
months.splice(0,1);
months.splice(1,0,"jun");
console.log(months);

let tictactoe=[['X',null ,'0'],[null,'X',null],['0',null ,'X']];
console.log(tictactoe);