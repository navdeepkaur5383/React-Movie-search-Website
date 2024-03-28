import React, { useContext } from 'react'
import {global}  from './App'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  
  const {movies,singlemovie,setsinglemovie}=useContext(global)
  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }
 


  
function ooooo(data){
  setsinglemovie(data)
}

  
  return (
    <div className="card-container">
      


      {
        movies.map((movie,index)=>
        <div className='card' key={index}>
          
          <img src={movie.Poster}></img>
          <div className="container">
            <p>
            {movie.Title}

            </p>

            <p>{movie.Year}</p>
           <Link to={`/singlemovie/${movie.imdbID}`}> <button onClick={()=>ooooo(movie)} >Watch</button></Link>

          </div>
        </div>
        )
      }
    </div>
  )
}

export default Home