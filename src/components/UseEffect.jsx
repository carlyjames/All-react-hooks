import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

// const UseEffects = () => {
    
// }
 

function UseEffectTutorial() {

    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    const inputRef = useRef(null)
    const Focus  = () => {
        inputRef.current.focus()
    }
    const ClearInput  = () => {
        inputRef.current.value = ''
    }
     

    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[0].email)
        });
    },[]);
    return (
        <div>
            <h1>{data}</h1>
            <h1>{count}</h1>
            <button className='btn btn-primary' onClick={()=> setCount(count + 1)}>Click</button> <br />
        </div>
    )
    
}



export default UseEffectTutorial;