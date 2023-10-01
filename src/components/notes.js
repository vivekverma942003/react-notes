import React from 'react'
import {MdDeleteForever} from "react-icons/md"
const Notes = ({id,date,text,handleDelete}) => {
  return (
    <div className='note'>
    <span>{text}</span>
    <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size="1.4em" onClick={()=>handleDelete(id)}/>
    </div>
    </div>
  )
}

export default Notes;