import React, { useContext,useEffect ,useState} from 'react'
import { UserContext } from '../UserContext'

import {Redirect, useHistory} from 'react-router-dom'
import axios from 'axios';
import'./createticket.css'


function CreateTicket() {
  
    const history = useHistory();

    const {user,setUser}=useContext(UserContext)
    const [query, setquery] = useState("");
    const [subject, setsubject] = useState('MICROPROCESSORS AND MULTICORE SYSTEMS');
    useEffect(() => {
        console.log(subject)
        
    })
    const createTicket=(e)=>{
        e.preventDefault()
     const ticket=   {
            "email":JSON.parse(localStorage.getItem("user")).email,
            "answer":[],
            "subject":subject,
            "query":query,
            'collegeId':JSON.parse(localStorage.getItem("user")).collegeid ,
              
        }
        axios
        .post("/createticket",ticket)
        .then(res => 
          {alert(res.data.message)
          console.log(res.data)})
        .catch(err => console.error(err));
            setquery("")
    }

   
 return(
        <div className="createticket">
            <form onSubmit={createTicket} >

           <input
            type="text"
            placeholder="Query"
            required
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />   
            <div>
            <label for="subject">Select a subject</label>
            <select name="subject" id="subject" onChange={(e)=>{setsubject(e.target.value)}} >
            <option value="MICROPROCESSORS AND MULTICORE SYSTEMS">MICROPROCESSORS AND MULTICORE SYSTEMS</option>
          <option value="COMPILER DESIGN">COMPILER DESIGN</option>
          <option value="COMPUTER NETWORKS">COMPUTER NETWORKS</option>
          <option value="DATA WAREHOUSING AND DATA MINING">DATA WAREHOUSING AND DATA MINING</option>
          <option value="SOFTWARE PROJECT MANAGEMENT">SOFTWARE PROJECT MANAGEMENT</option>
          <option value="UNIX PROGRAMMING">UNIX PROGRAMMING</option>
          <option value="INTELLECTUAL PROPERTY RIGHTS AND PATENTS">INTELLECTUAL PROPERTY RIGHTS AND PATENTS</option>

          <option value="WEB TECHNOLOGIES">WEB TECHNOLOGIES</option>
          <option value="OBJECT ORIENTED ANALYSIS AND DESIGN	">OBJECT ORIENTED ANALYSIS AND DESIGN	</option>
          <option value="CLOUD COMPUTING">CLOUD COMPUTING</option>
          <option value="ARTIFICIAL INTELLIGENCE">ARTIFICIAL INTELLIGENCE</option>
          <option value="MANAGEMENT SCIENCE">MANAGEMENT SCIENCE</option>
          
          <option value="MOBILE COMPUTING">MOBILE COMPUTING</option>
          <option value="ADVANCED JAVA PROGRAMMING">
            ADVANCED JAVA PROGRAMMING
          </option>
          <option value="BIG DATA ANALYTICS">BIG DATA ANALYTICS</option>
          <option value="SOCIAL NETWORKS AND SEMANTIC WEB">SOCIAL NETWORKS AND SEMANTIC WEB</option>
          <option value="CRYPTOGRAPHY AND NETWORK SECURITY"> CRYPTOGRAPHY AND NETWORK SECURITY</option>

          <option value="PARALLEL ALGORITHMS">  PARALLEL ALGORITHMS</option>
          <option value="Advanced Databases">Advanced Databases</option>
          <option value="Human Computer Interaction">Human Computer Interaction</option>
          <option value="E Commerce">E Commerce	</option>

            </select>
            </div>
            <button type='submit'>Create Ticket</button>
                </form>
            
        </div>)
     
       
}

export default CreateTicket
