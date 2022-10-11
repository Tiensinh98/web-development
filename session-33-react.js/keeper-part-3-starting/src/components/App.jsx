import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import { v4 as uuidv4 } from 'uuid';

function App() {

  const [noteContainer, setNoteContainer] = useState([]);

  function addNote(note) {
    setNoteContainer((prevNoteContainer) => {
      return [...prevNoteContainer, note];
    })
  }

  function deleteNote(id) {
    console.log("delete", id);
    setNoteContainer(noteContainer.filter((note, index) => index !=id));
  }

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addNote}
      />
      {noteContainer.map((noteItem, index) => {
        return <Note onDelete={deleteNote} key={uuidv4()} id={index} title={noteItem.title} content={noteItem.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
