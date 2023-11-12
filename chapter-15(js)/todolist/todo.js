let lis=[];

while (true) {
    command=prompt("enter commands:1.quit 2.add 3.delete 4.show");
    if (command=="add") {
        lis.push(prompt("enter task to add in list").toLowerCase());
    } else if(command=="show") {
        alert(lis);
    }else if(command == "delete"){
        let deltetask=prompt("enter task to delete").toLowerCase();
        if(lis.includes(deltetask)){
            let index=lis.indexOf(deltetask);
            lis.slice(index,1);
        }
    }else{
        break;
    }
}