h1=document.querySelector("h1");

setTimeout(() => {
h1.style.color = "red";
}, 1000);
setTimeout (() => {
h1.style. color = "orange";
}, 2000);
setTimeout(() => {
h1.style. color = "green";
}, 3000);

function ChangeColor(color,delay){
    setTimeout(() => {
        h1.style.color=color;  
    },delay);
}

ChangeColor("red",4000);
ChangeColor("orange",5000);
ChangeColor("green",6000);
ChangeColor("pink",7000);

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
      h1.style.color=color;
      if(nextColorChange())nextColorChange();
    },delay);
}

changeColor("blue",8000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("pink",1000,()=>{
            changeColor("white",1000);
        });
    });
});

// callbacks nesting and that is callbackhell
// callback 4000 1000 1000 means that after execution of blue 
// later 1000 msec yellow execute and then after of 1000 pink
