import React from 'react'
import { useState,createContext } from 'react';
import Login from './UseContextLogin';
import User from './UseContextUser';

export const AppContext = createContext(null)

function UseContexts() {

    const [username, SetUsername] = useState("")

  return (
    <AppContext.Provider value={{ username, SetUsername }}>
        <Login />
        <User  />
    </AppContext.Provider>
  )
}

export default UseContexts