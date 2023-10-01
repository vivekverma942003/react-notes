import React, { Component } from "react"
import Notes from "./notes"
import Addnotes from "./addnotes"

const NotesList = ({notes,handleAddNote,handleDelete})=>{
    return(
        <div className="notes-list">
            {notes.map((e)=>{
                return (<Notes id={e.id} text={e.text} date={e.date} 
                    handleDelete={handleDelete}/>)

            })}
            <Addnotes handleAddNote={handleAddNote} />
        </div>
    )
}
export default NotesList;







// this code is used to show the props value in this Component

