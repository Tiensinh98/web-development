const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
//   console.log(req);
});

app.get("/contact", (req, res) => {
    res.send("Contact me at: phamtiensinh010@gmail.com");
});

app.get("/about", (req, res) => {
    res.send("My name is Sinh. I love coding");
});

app.listen(port, () => {
  console.log(`Server is listening for port ${port}`);
});