import React from "react";
import ReactDOM from "react-dom/client";


function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript

root.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" tel="+123 456 789" email="b@beyonce.com" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"/>
    <Card name="Jack Bauer" tel="+987 654 321" email="jack@nowhere.com" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"/>
    <Card name="James" tel="+456 123 789" email="gmail@chucknorris.com<" img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"/>
    <input id="fName" placeholder="Enter your first name" value="Sinh Pham"/>
  </div>,
  
);
