import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
    return (
        <div className='home' >
          <div className="container"> <div className="student"> <Link className="link" to='/register/student'>Register as Student</Link>
            <Link to='/login/student' className="link">Login as Student</Link>
            </div>
            <div className="faculty">
            <Link className="link" to='/register/faculty'>Register as Faculty</Link>
            <Link to='/login/faculty' className="link" >Login as Faculty</Link>
            </div>
            </div>
        </div>
    )
}

export default Home
