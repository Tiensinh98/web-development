import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from "./Note";

function App() {
  return (
    <div>
    <Header />
    <Note titleNumber="1"/>
    <Note titleNumber="2"/>
    <Footer />
    </div>
  );
}

export default App;
