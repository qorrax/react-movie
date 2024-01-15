
// create a new component called MovieList  


import React,{useEffect, useState}from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';



const MovieList = () => {

const [movies, setMovies] = useState([])

useEffect(() => {

    axios.get("https://ghibliapi.vercel.app/films/")
    .then((res) => {
        setMovies(res.data)

     
    })
    .catch((err) => {
        console.log(err)
    })

}, [])
  

    return (

          <div className='grid grid-cols-3 gap-4'>
                    
                    {movies.map((movie) => {
    
                        return <MovieCard  film={movie} /> 
                    })}

            </div>
          )}

export default MovieList;
