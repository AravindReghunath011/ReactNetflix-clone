import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '.././axios/axios';
import {API_KEY,IMG_URL } from "../constants/constants"

function Banner() {
  const [movie, setMovie] = useState();
  console.log('hey');
    useEffect(() => {
      console.log('heyyy');
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          console.log(response.data.results,'koko')
          setMovie(response.data.results[10])
          console.log('helo');
        })
    }, []);
  return (
    <div className='banner'
    style={{ backgroundImage:`url(${IMG_URL+movie?.backdrop_path}`}}>   
        <div className='content'>
            <h1 className='title'> {movie ? movie.original_title ? movie.original_title  : movie.original_name : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description' > {movie?.overview}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner