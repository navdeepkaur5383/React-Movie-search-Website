import React, { useContext } from 'react'
import { global } from './App'

function Search() {
    const {query,setquery}=useContext(global)
  return (
    <div>
<form onSubmit={(e)=>e.preventDefault()}>
<input type='text' placeholder='search' value={query} onChange={(e)=>setquery(e.target.value)}></input>
</form>

    </div>
  )
}

export default Search