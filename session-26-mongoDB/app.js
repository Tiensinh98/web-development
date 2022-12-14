const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

const Fruit = mongoose.model('Fruit', fruitsSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
  });

const Person = mongoose.model('Person', personSchema);
const person = new Person({
    name: "John",
    age: 37
});

//person.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 9,
    review: "The best fruit"
});

const orange = new Fruit({
    name: "Orange",
    rating: 6,
    review: "To sour for me"
});

const banana = new Fruit({
    name: "Banana",
    rating: 6,
    review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully save all the fruits to fruitsDB")
//     }
// });

Fruit.find((err, fruits)=>{
    if (err) {
        console.log(err);
    }
    else {
        mongoose.connection.close();
        fruits.forEach((fruit)=>{
            console.log(fruit.name);
        });
    }
});