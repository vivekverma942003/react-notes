import React from 'react'
import { MdSearch } from 'react-icons/md'
const Search = ({handleSearch}) => {
  return (
    <div className='search'>
        <input type='text' onChange={(e)=>handleSearch(e.target.value)} placeholder='Search your notes here...'/>
        <MdSearch className='search-icons' size="1.3rem"/>
    </div>
  )
}

export default Search