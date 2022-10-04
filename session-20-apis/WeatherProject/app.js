const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
    const query = req.body.cityName;
    const apiKey = "35176aca8c576fde3750c2eb1006fd6e";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            res.write("<p>Weather descriptions: " + weatherDescription);
            res.write(`<h1>Temperature in ${query} is: ${temp} degree Celsius.</h1>`);
            res.write(`<img src=${imageUrl}>`);
            res.send();
        });
    });
})

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
})