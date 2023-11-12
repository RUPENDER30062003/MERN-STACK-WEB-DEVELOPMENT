const express = require("express");
const app = express();
const port = 8080;

app.get("/register", (req, res) => {
    let {user,password}=req.query;
    res.send(`standard GET response.Welcome${user+" "+password}`);
});

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

app.post("/register", (req, res) => {
    console.log(req.body);
    let {user,password}=req.body;
    res.send(`standard POST response.Welcome${user+" "+password}`);
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});
