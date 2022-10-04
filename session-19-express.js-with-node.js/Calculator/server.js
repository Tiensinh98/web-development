const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', (req, res) => {
    var reqBody = req.body;
    var bmi = parseFloat(reqBody.weight) / Math.pow(parseFloat(reqBody.height), 2);
    res.send(`Your BMI is ${bmi}`);
})

app.listen(port, ()=> {
    console.log(`Server is listening for port ${port}`);
});