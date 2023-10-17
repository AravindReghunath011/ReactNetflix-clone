import React,{useState,useEffect} from 'react'
import './RowPost.css'
import {API_KEY, IMG_URL} from '../constants/constants'
import axios from '../axios/axios'
import Shimmer from '../shimmer/Shimmer'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState('');
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
     
      
      setMovie(response.data.results)
    })
  },[])
  const handleMovie = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if(response.data){
        console.log(response.data.results[0].key);
      setId(response.data.results[0].key)

      }
    }).catch(err=>{
      console.log("bad request");
    })
  }
  return (movie.length===0) ? (<Shimmer/>) : (
    <div className='row'>
      
        <h2 > {props.title}</h2>
    <div className="posters">
      {movie?.map((obj)=>(
        
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster': 'poster'} src={`${IMG_URL+obj.poster_path}`} alt="post" />
            

      ))}

            </div>
             { id && <YouTube videoId={id} opts={opts}/>  }
    </div>
  )
}

export default RowPost