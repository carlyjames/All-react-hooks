import React from 'react'
import { useRef } from 'react';

const UseRefe = () => {
    const MyRef = useRef(null)

    const Focus = () =>{
        MyRef.current.focus()
    }
    const Clear = () =>{
        MyRef.current.value = ''
    }

    return ( 
        <div>
            <input type="text" ref={MyRef} />
            <button onClick={Focus} className="btn btn-primary">Click to focus</button>
            <button onClick={Clear} className="btn btn-primary">Click to clear</button>
        </div>
     );
}
 
export default UseRefe;