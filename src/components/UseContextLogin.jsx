import React from 'react'
import { AppContext } from './UseContexts';
import { useContext } from 'react';

const Login = () => {

    const {SetUsername} = useContext(AppContext)

    return ( 
        <input className='mt-2' type="text" onChange={(e)=>{SetUsername(e.target.value)}} />
     );
}
 
export default Login;