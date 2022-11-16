import React from 'react';
import { AppContext } from './UseContexts';
import { useContext } from 'react';

const User = () => {

    const {username} = useContext(AppContext)

    return ( 
        <div>
            <h1>
                Username : {username}
            </h1>
        </div>
     );
}
 
export default User;