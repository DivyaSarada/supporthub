import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../UserContext'
const isAuthenticated=()=> {
    if (typeof window == "undefined")
      return false

    if (localStorage.getItem('user'))
      return JSON.parse(sessionStorage.getItem('user'))
    else
      return false
  }


function PrivateRouteStudent({component: Component,...rest}) {
 const {user} = useContext(UserContext)

    return(
        <Route {...rest} render={(props)=>{
           return isAuthenticated()?(<Component {...props} />):<Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        } }/>
        
    )
}

export default PrivateRouteStudent
