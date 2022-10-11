import React from 'react';
import ReactDOM from 'react-dom';
import pi, {doublePi, triplePi} from "./math"
//import * as pi from "./math
import App from './components/App';

const fName = "Sinh";
const lName = "Pham";
const currentDate = new Date();
const year = currentDate.getFullYear();
const image = "https://picsum.photos/200";

const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
};

ReactDOM.render(
    //<div>
    //    <Heading />
    //    <List />
    //    <p style={{color: "red"}}>
    //        My lucky number is {Math.floor(Math.random() * 10)}
    //    </p>
    //    <p>
    //        Copyright {year}
    //    </p>
    //    <img src={image + "?grayscale"} alt=""/>
    //</div>
    <App />, document.getElementById('root'));