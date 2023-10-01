import React from 'react'

const Header = ({handleDark}) => {
    
  return (
    <div className='header'>
    <h1>Notes</h1>
    <button onClick={()=>handleDark(
      (prev)=>!prev
    )}>Toggle</button>

    </div>
  )
}

export default Header;