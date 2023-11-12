const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.set("views", path. join(__dirname, "/views"));



// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'Rupender@123'
});


let q='show tables';

try{
    connection.query(q,
        (err, results, fields)=>{
            if (err) throw err;
            console.log(results.length);
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}catch(err){
    console.log(err);
}


let createRandomUser=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};

let createRandomUser1=()=> {
    return {
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
 };

// console.log(createRandomUser1());


// inserting new data //
// let q1="insert into user (id,username,email,password) values (?,?,?,?)";
// let user1=["1234@abc2", "random_user24", "random4@gmail. com2", "random@1234"];
// let user2=["123@abc2", "random_user2", "random@gmail. com2", "random@123"];

// try{
//     connection.query(q1,user1,
//         (err, results, fields)=>{
//             if (err) throw err;
//             console.log(results.length);
//             console.log(results); // results contains rows returned by server
//             console.log(fields); // fields contains extra meta data about results, if available
//         }
//     );
// }catch(err){
//     console.log(err);
// }


// let q2="insert into user (id,username,email,password) values ?";
// let user3=[["1234@abc2", "random_user24", "random4@gmail. com2", "random@1234"],["123@abc2", "random_user2", "random@gmail. com2", "random@123"]];

// try{
//     connection.query(q2,[user3],
//         (err, results, fields)=>{
//             if (err) throw err;
//             console.log(results.length);
//             console.log(results); // results contains rows returned by server
//             console.log(fields); // fields contains extra meta data about results, if available
//         }
//     );
// }catch(err){
//     console.log(err);
// }



let getRandomUser1=()=>{
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};


let q3="insert into user(id,username,email,password) values ?";
let user4=[];
for(let i=1;i<=100;i++){
    user4.push(getRandomUser1());
}

// try{
//     connection.query(q3,[user4],
//         (err, results, fields)=>{
//             if (err) throw err;
//             console.log(results.length);
//             console.log(results); // results contains rows returned by server
//             console.log(fields); // fields contains extra meta data about results, if available
//         }
//     );
// }catch(err){
//     console.log(err);
// }
// connection.end();

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})

app.get("/",(req,res)=>{
    let q4="select count(*) from user";
    try{
        connection.query(q4,(err,results)=>{
            if(err)throw err;
            console.log(results[0]['count(*)']);
            // res.send(`${results[0]['count(*)']}`);
            let count=results[0]['count(*)'];
            res.render("home.ejs",{count});
            }
        )
    }catch(err){
        console.log(err);
        res.send("some error in database");
    }
});

app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try{
        connection.query(q, (err, result)=>{
        if (err) throw err;
        res.render("showuser.ejs",{userdata:result});
        });
    }   
    catch (err){
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user/:id/edit",(req,res)=>{

    let {id}=req.params;
    let q5=`SELECT * FROM user WHERE id="${id}"`;
    try{
        connection.query(q5, (err, result)=>{
        if (err) throw err;
        let user5=result[0];
        res.render("edit.ejs",{user5});
        });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
})
 

app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let {password:formpassword,username:newusername}=req.body;
    let q6=`SELECT * FROM user WHERE id="${id}"`;
    try{
        connection.query(q6, (err, result)=>{
        if (err) throw err;
        let user6=result[0];
        if(formpassword!=user6.password){
            res.send("WRONG PASSWORD");
        }else{
            let q7=`update user set username="${newusername}" where id="${id}"`;
            connection.query(q7,(err,result)=>{
                if (err) throw err;
                res.redirect("/user");
            })
        }
        
        });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
})

app.post("/user",(req,res)=>{

    let {username:userusername,email:useremail,password:userpassword}=req.body;
    let userid=faker.string.uuid();
    let q8=`insert into user (username,email,password,id) values (?,?,?,?)`;
    let userdata=[userusername,useremail,userpassword,userid];
    try{
        connection.query(q8,userdata,(err, result)=>{
        // if (err) throw err;
        console.log(result)
        res.redirect("/user");
        });
    }catch (err){
        console.log(err);
        res.send("some error in DB");
    }
   
})

app.delete("/user/:id",(req,res)=>{

    let {id}=req.params;
    let {password:formpassword}=req.body;
    let q9=`SELECT * FROM user WHERE id="${id}"`;
    let q10=`dELETE FROM user WHERE id="${id}"`;
    try{
        connection.query(q9, (err, result)=>{
            console.log(result);
            if (err) throw err;
            let user6=result[0];
            if(formpassword!=user6.password){
                res.send("WRONG PASSWORD");
            }else{
                connection.query(q10,(err,result)=>{
                if (err) throw err;
                res.redirect("/user");
                })
            }     
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
})