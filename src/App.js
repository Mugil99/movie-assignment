import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [query,setQuery]=useState("");
  const [arr,setArr]=useState([]);

  function handleClick(){
    axios.get(`https://www.omdbapi.com/?s=${query}&apikey=61e718e9`)
    .then(res=>{
          setArr(res.data.Search)
          console.log(arr)
    })
    .catch(err=>console.log(err))
    setQuery("");
  }
  return (
    <div>
      <div>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        <button onClick={handleClick}>Search</button>
    </div>
    {   arr?
        arr.map((movie)=>(
          <div>
            <h1>{movie.Title}-{movie.Year}</h1>
            <img src={movie.Poster}></img>
          </div>
        )):<h1>Invalid Movie name...Pls try again</h1>
    }
    </div>
  );
}

export default App;
