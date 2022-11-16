import React, { useState, useEffect } from 'react';
import OtherUseState from './OtherUseState';

const Mystate = () => {
    const [count, setCount] = useState(5)
    const [Secondcount, setSecondCount] = useState(1)
    const [ShowMessage, SetShowMessage] = useState(true)

    useEffect(()=>{
        setCount(count + 1)
    },[Secondcount])

    return ( 
        <React.Fragment>

            {/* ---------first counter--------- */}
            <div className='mt-4 mb-4'>
                {count}
                <button onClick={() => setCount(count + 1)} className="btn btn-primary mx-2">Increment</button>
                <button onClick={() => setCount(count - 1)} className="btn btn-primary">Decrement</button>
            </div>

            {/* ----------secondcounter----------- */}
            <div className="mt-4">
                {Secondcount}
                <button onClick={() => setSecondCount(Secondcount + 1)} className="btn btn-primary">Second Count</button>
            </div>


            {/* -----------show or hide message----------- */}
            <button onClick={() => SetShowMessage(false)} className="btn btn-primary m-2">Hide Message</button>
            <button onClick={() => SetShowMessage(true)} className="btn btn-primary">Show Message</button>
            {ShowMessage && <OtherUseState />}


        </React.Fragment>
     );
}
 
export default Mystate;