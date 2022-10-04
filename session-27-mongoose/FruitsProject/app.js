const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Give it a name!"]
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    },
    review: String
});

const personSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Give it a name!"]
    },
    age: {
        type: Number,
        min: 0,
        max: 100
    },
    favoriteFruit: fruitsSchema
});

const Fruit = mongoose.model("Fruit", fruitsSchema);
const Person = mongoose.model("Person", personSchema);

const pineApple = new Fruit({
    name: "PineApple",
    rating: 10,
    review: "Pretty solid as a fruit"
});

//pineApple.save();

const person = new Person({
    name: "Amy",
    age: 12,
    favoriteFruit: pineApple
})

//person.save();

Person.updateOne({name: "John"}, {favoriteFruit: pineApple}, (err)=>{
    if (err) {
        console.log(err);
    }
    else {
        console.log("successfully update fruit");
    }
})

//const fruit = new Fruit({
//    name: "Apple",
//    rating: 10,
//    review: "Pretty solid as a fruit"
//});
//
//fruit.save();
//
//const kiwi = new Fruit({
//    name: "Kiwi",
//    rating: 7,
//    review: "The best fruit"
//});
//
//const orange = new Fruit({
//    name: "Orange",
//    rating: 7,
//    review: "The sauer fruit"
//});

//Fruit.insertMany([kiwi, orange], (err)=>{
//    if (err) {
//        console.log(err);
//    }
//    else {
//        console.log("successfully save fruits");
//    }
//});

//Fruit.find((err, fruits)=>{
//    if (err) {
//        console.log(err);
//    }
//    else {
//        fruits.forEach((f)=>{
//            console.log(f.name);
//        })
//    }
//})

//Fruit.updateOne({_id: "632ea736a1ff80bab9b9690e"}, {name: "Peach"}, (err)=>{
//    if (err) {
//        console.log(err);
//    }
//    else {
//        console.log("successfully update fruit");
//    }
//})

// Fruit.deleteOne({name: "Peach"}, (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         mongoose.connection.close();
//         console.log("successfully delete fruit");
//     }
// })

//Fruit.deleteMany({name: "Apple"}, (err)=>{
//    if (err) {
//        console.log(err);
//    }
//    else {
//        mongoose.connection.close();
//        console.log("successfully delete fruit");
//    }
//})


