
import '.././Student/studentnav.css'
import React, { useContext,useEffect } from 'react'
import { UserContext } from '../../UserContext'

import {Link, Redirect, useHistory} from 'react-router-dom'


function Facultynav() {
    const history = useHistory();

    const {user,setUser}=useContext(UserContext)
    
const handleLogout=(e)=>{
    localStorage.clear()
    setUser(false)
    history.push('/')
}
    return (
        <nav className='studentnav' style={{justifyContent:"flex-end",alignItems:"center"}}>
             <button style={{fontSize:"2rem",position:"fixed",top:'13px',right:"5px",alignItems:"center"}} onClick={(e)=>handleLogout(e)}>Logout</button>
        </nav>
    )
}

export default Facultynav
