import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import Note from './components/note';
import NoteForm from './components/NoteForm';

function App(){

  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd =(note=>{
    const newNotes = [...notes];
    newNotes.push(note);
    setNotes(newNotes)
  })

  const filterNotes = notes.filter(n=>{
    return n.text.toLowerCase().includes(search.toLowerCase())
  })

  const handleDelete = ((id)=>{
    const newNotes = [...notes]
    const index = newNotes.findIndex((note)=>note.id===id);
    newNotes.splice(index,1)
    setNotes(newNotes)
  })

  const handleUpdate = ((id,text)=>{
    const newNotes = [...notes];
    const index = newNotes.findIndex((note)=>note.id===id);
    newNotes[index]={id,text};
    setNotes(newNotes);
  })


  return(
    <div className='App'>
      <Search setSearch={setSearch}/>
      {filterNotes.map(note=>{
        return <Note key={note.id} note={note} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      })}
      <NoteForm handleAdd={handleAdd}/>
    </div>
  )

}

export default App;
