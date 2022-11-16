import React from 'react';
import { useState, useRef } from 'react';


const Button = () => {

    const [toggler, SetToggler] = useState(false)

    return ( 
        <div>
            <button onClick={()=> SetToggler(!toggler)} className="btn btn-primary w-full mt-2">Click to toggle</button>
            { toggler && <h1>This is a toggles text</h1>   }
        </div>
     );
}
 
export default Button;