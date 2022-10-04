const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/about', (req, res) => {
    res.send("<h1>Hello Sinh!</h1>");
});

app.post('/', (req, res) => {
    var reqBody = req.body;
    var result = Number(reqBody.n1) + Number(reqBody.n2);
    res.send(`The result of the calculation is ${result}`);
})

app.listen(port, ()=> {
    console.log(`Server is listening for port ${port}`);
});