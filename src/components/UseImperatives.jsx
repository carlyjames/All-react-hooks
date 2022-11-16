import React from 'react'
import { useState, useRef } from 'react';
import Button from './UseImerativesButton';

const UseImperatives = () => {



    return (
        <React.Fragment>
            <button className="btn btn-primary">Button from parent</button>
            <Button />
        </React.Fragment>
     );
}
 
export default UseImperatives;