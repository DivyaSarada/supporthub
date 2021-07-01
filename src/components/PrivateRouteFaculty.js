import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../UserContext'



function PrivateRouteFaculty({children,...rest}) {
    const {user,designation} = useContext(UserContext)

    return(
        <Route {...rest} render={()=>{
           return user&&designation==="faculty"?children:<Redirect to='/' />
        } }/>
        
    )
}

export default PrivateRouteFaculty
