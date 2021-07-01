import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import './adminnav.css'


function AdminNav() {
    const {setUser}=useContext(UserContext)
const history=useHistory()

const handleLogout=(e)=>{
    localStorage.clear()
    setUser(false)
    history.push('/admin')
}
    return (
        <div className='adminnav'>
            <Link class='Link' to='/admin/unautherized'>Requested Users</Link>
            <Link class='Link' to='/admin/facultyanswered'>Answered</Link>
            <Link  class='Link' to='/admin/studentsquestions'>Questions</Link>
            <button style={{fontSize:"2rem",position:"fixed",top:'13px',right:"5px",alignItems:"center"}} onClick={(e)=>handleLogout(e)} >Logout</button>
        </div>
    )
}

export default AdminNav
