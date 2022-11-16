import React, { Component, useReducer, useState } from 'react'; 

const reducerFunction = (state,action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1,showText : state.showText}
        case "toogleShowText":
            return {count: state.count,showText : !state.showText}
        default:
            return state;
    }
}
 
 

const UseReducing = () => {
    const [state, dispatch] = useReducer(reducerFunction, {count : 0, showText : true})
    return ( 
        <React.Fragment>

                <h1>{state.count}</h1>
                <button
                onClick={()=> 
                {dispatch({type : "INCREMENT"})
                {dispatch({type : "toogleShowText"})}
                }
                }
                className='btn btn-primary'
                
                >Click</button>
                {state.showText && <h1>This is the text</h1>}
            </React.Fragment>
     );
}
 
export default UseReducing;
