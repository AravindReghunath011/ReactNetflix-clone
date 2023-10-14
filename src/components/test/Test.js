import React,{useState} from 'react'
import axios from 'axios'

function Test() {
const [state,setState] = useState([])
  return (
    <div>
        <button onClick={()=>{
            axios.get(' https://jsonplaceholder.typicode.com/users').then((response)=>{
                console.log(response.data)
                setState(response.data)
            })
        }}>click </button>
        
            {state.map((obj,index)=>{
                return(
                <>
                <h1>{index + 1}</h1>
                <h1>{obj.name}</h1>
                </>
                )
            })}
        
    </div>
  )
}

export default Test