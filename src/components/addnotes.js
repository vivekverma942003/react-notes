import React from 'react'
import { useState } from 'react'
const Addnotes = ({handleAddNote,handleDelete}) => {
    const [noteText,setNoteText]=useState('');
    const characterLimit=100;
    const handleChange=(e)=>{
        if(characterLimit-e.target.value.length>=0){
        setNoteText(e.target.value)

        }
    }
    const handleSave=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText)
            setNoteText("")
        }
       
    }
    
  return (
    <div className='note new'>
        <textarea rows="8" cols="10" placeholder='Enter your notes here'onChange={handleChange} value={noteText}/>
        <div className='notes-footer'>
            
            <small >{characterLimit-noteText.length}- Remaining</small>
            
            <button onClick={handleSave}>Save </button>
        </div>
    </div>
  )
}

export default Addnotes