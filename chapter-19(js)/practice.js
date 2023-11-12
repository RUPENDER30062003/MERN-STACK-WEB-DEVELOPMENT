let length=4;
function callback(){
    console.log(this.length);
};
const object={
    length:5,
    method(callback){
        length=3;
        callback();
    }
};
object.method(callback);
console.log("hello");








