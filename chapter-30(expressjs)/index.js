
const express = require('express');
const app = express();

// console.dir(app);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const port=3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// app.use((req,res)=>{
//     console.log(req);
//     console.log("Request received");
//     res.send("this is a basic response");
//     res.send({
//       name:"apple",
//       color:"red"
//     })
// })

// app.use((req,res)=>{
//   console.log("reqest received");
//   let code="<h1>Fruits</h1><ul><li>mango</li><li>apple</li></ul>";
//   res.send(code);
// })

app.get('/apple', (req, res) => {
  res.send('apple');
})

app.get('/', (req, res) => {
  res.send('you contacted root path hello i am root nodemon ');
})

app.get('/orange', (req, res) => {
  res.send('orange');
})

// app.get('*', (req, res) => {
//   res.send('path doesnot exist');
// })


app.post('/', (req, res) => {
  res.send('you sent a post request to root');
})


// app.get ("/:username/:id",(req, res) => {
//   console.log(req.params);
//   let {username,id} = req.params;
//   // res.send(`this acount belongs to `);
//   res.send(`This account belongs to @${username} & id:${id}`);
// });


app.get ("/ig/:username", (req, res) => {
  let {username} = req. params;
  res.send(`<h1>This account belongs to @${username}</h1>`);
  }
);
  

app.get("/search",(req,res)=>{
    // console.log(req.query);
    // res.send("sucess");
    let {q,color}=req.query;
    if(!q){
      res.send("No search query");
    }
    res.send(`These are the results for:${q}and color ${color}`);
  }
);
