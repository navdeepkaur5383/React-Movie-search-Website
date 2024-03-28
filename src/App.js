import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Singlemovie from './singlemovie';
import Navbar from './Navbar';
import Error from './Error';
import { createContext, useEffect, useState } from 'react';
import Search from './search';

export const global=createContext()


function App() {
  const api_url=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const [error,seterror]=useState({show:false,msg:''})
  const [isloading,setisloading]=useState(true)
  const[movies,setmovies]=useState([])
  const [query,setquery]=useState('titanic')
  const[singlemovie,setsinglemovie]=useState([])
const fmovies=async(url)=>{
try {
  const resp= await fetch(url)
  const result=await resp.json()
  console.warn(result)

  if(result.Response==="True"){
  setmovies(result.Search)
  setisloading(false)
  }
  else{
    seterror({show:true,msg:result.Error})
  }
} catch (error) {
  seterror({show:true,msg:error})
}
}

useEffect(()=>{
  let set=setTimeout(() => {
    fmovies(`${api_url}&s=${query}`)
  }, 500);
  return ()=> clearTimeout(set)
 
},[query])
  return (
    <global.Provider value={{error,isloading,movies,query,setquery,singlemovie,setsinglemovie}} >
    <div className="App">
  <BrowserRouter>
  <Navbar/>
  <Search/>
  
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='/singlemovie/:id' element={<Singlemovie/>} />
<Route path='/search' element={<Search/>} />
<Route path='*' element={<Error/>} />



  </Routes>
  
  
  
  </BrowserRouter>
    </div>
    </global.Provider>
  );
}

export default App;
