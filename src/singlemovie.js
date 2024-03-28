import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { global } from './App'
function Singlemovie() {
  const {singlemovie}=useContext(global)
    const {id}=useParams()


  return (
    <div className='movie-details'>
   <div className="poster">
   <img src={singlemovie.Poster} ></img></div>
   <div className='info'>
    <p>Title:<strong>{singlemovie.Title}</strong></p>
    <p>Year:<strong>{singlemovie.Year}</strong></p>
    <p>Type:<strong>{singlemovie.Type}</strong></p>
   </div>
      
   
      
      

      
    </div>
  )
}

export default Singlemovie