import React, { createContext } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localstorage'
import { useState,useEffect } from 'react'

  export const Authcontext = createContext()
  
    const Authprovider = ({children}) => {
      const [userdata, setuserdata] = useState(null)
      
      useEffect(() => {
        setLocalstorage()
        const {employees}=getLocalstorage()
        setuserdata(employees)
        
        
      },[])
  return (
    <div>
        <Authcontext.Provider value={[userdata,setuserdata]}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}

export default Authprovider