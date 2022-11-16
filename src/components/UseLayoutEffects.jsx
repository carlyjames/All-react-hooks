import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';

const UseLayoutEffects = () => {

    const MyInput = useRef(null)

    useEffect(() =>{
        MyInput.current.value = "Carly"
    }, []);

    useLayoutEffect(()=>{
        console.log(MyInput.current.value);
    }, [])

    return ( 
        <div>
            <input type="text" ref={MyInput} value="James" />
        </div>
     );
}

 
export default UseLayoutEffects;