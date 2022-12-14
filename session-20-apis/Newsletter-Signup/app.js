var express = require('express');
var https = require('https');
var bodyParser = require('body-parser');
var https = require('https');

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us11.api.mailchimp.com/3.0/lists/21f68e263a"
    const options = {
        method: "POST",
        auth: "Sinh:9fe13fafbb89fb28109f53fce21b5347-us11"
    }

    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        response.on("data", (data)=>{
            console.log(JSON.parse(data))
        })
    })
    request.write(jsonData);
    request.end();
})

app.post("/failure", (req, res) => {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000.');
})

// API key
// 9fe13fafbb89fb28109f53fce21b5347-us11

// List Id
// 21f68e263a