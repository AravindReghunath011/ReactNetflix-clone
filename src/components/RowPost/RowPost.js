import React,{useState,useEffect} from 'react'
import './RowPost.css'
import {IMG_URL,API_KEY} from '../constants/constants'
import axios from '../axios/axios'
import { original,action } from '../url'

function RowPost(props) {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
     
      
      setMovie(response.data.results)
    },[])
  })
  return (
    <div className='row'>
        <h2 > {props.title}</h2>
    <div className="posters">
      {movie?.map((obj)=>(
        
            <img className={props.isSmall?'smallPoster': 'poster'} src={`${IMG_URL+obj.poster_path}`} alt="post" />

      ))}
            </div>
    </div>
  )
}

export default RowPost