import React,{useState} from 'react'
import {Link} from "react-router-dom"
import '../register.css'
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SchoolIcon from '@material-ui/icons/School';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Register() {

 const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [collageid,setcollageid]=useState("")
const [name, setname] = useState("")


const  handleRegister= async (e)=>{
    e.preventDefault()
const batch= +collageid.slice(0,2)
const user={
"email":email,
"password":password,
"collegeid": collageid,
'name':name,
"designation": "student",
"batch":batch,
"verified":false,
"Adminverified":false,
'count':0
}

let reg= await axios.post("/register/student",user)
console.log(reg.data)

    alert(reg.data.message)
    setemail("")
    setpassword("")
    setname("")
    setcollageid("")
}


    return (

        <div className="register">
           <form className='card' onSubmit={handleRegister}>
            <h1>Student Register</h1>
        <div className="logininput"><input type="email" placeholder="Mail" required value={email} onChange={(e)=>setemail(e.target.value)} /><MailOutlineIcon fontSize="large" /></div>
        <div className="logininput"><input type="text" placeholder="Name" required value={name} onChange={(e)=>setname(e.target.value)} /> <AccountCircleIcon fontSize='large'/></div>
        <div className="logininput"><input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} required /><LockIcon fontSize="large"/></div>
        <div><input type="text" placeholder="College ID Number" value={collageid} onChange={(e)=>setcollageid(e.target.value)}  required /><SchoolIcon fontSize="large" /></div>

        <div><button className="register-btn" >Register</button>
        </div>
       
        </form>

   
    <div><Link   to="/login/student" className="login-btn" >Registered? Sign In Here</Link>
    <Link   to="/" className="login-btn" >Home</Link>
    
        </div>
        </div>
    )
}

export default Register
