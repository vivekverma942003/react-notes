import './App.css';
import React, { useState, useEffect } from "react"
import NotesList from "./components/noteslist"
import Header from './components/header';
import Search from './components/search';
import { nanoid } from "nanoid"
function App() {
  const [dark, setDark] = useState(false)
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "this is my first note!",
    //   date: "15/04/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "this is my second note!",
    //   date: "16/04/2021",
    // },
    // {
    //   id: nanoid(),
    //   text: "this is my third note!",
    //   date: "17/04/2021",
    // }

  ])
  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

  useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  }
  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchtext, setSearchtext] = useState('');

  return (
    <div className={dark ? "dark-color" : "light-color"}>
      <Header handleDark={setDark} />
      <Search handleSearch={setSearchtext} />
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchtext))}
        handleAddNote={addNote}
        handleDelete={deleteNotes}

      />
    </div>
  );
}

export default App;
