import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Td from './Student/Td';
import './myticket.css'
import { DragHandle } from '@material-ui/icons';



function Myticket() {
    const [mytickets, setmytickets] = useState([    ])
    const [isdelete,setisdelete] =useState(false)
    const handleDelete=(id)=>{
      axios
          .post("/deletequery",{"id":id})
          .then(res => 
            {setisdelete(!isdelete)
            console.log(res)})
          .catch(err => console.error(err));

    }
    useEffect(() => {
        
       
           axios
          .post("/mytickets",{email:JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")).email:null})
          .then(res => 
            {setmytickets(res.data)
           })
          .catch(err => console.error(err));

        
    },[isdelete])
    
    return (
        
            <table className="myticket">
  <tr>
    <th>Subject</th>
    <th>Question</th>
    <th>Answer</th>
    <th>Delete Ticket</th>
  </tr>
          {mytickets.map((ticket) =>
  <tr>
       <td>{ticket.subject}</td>
       <td>{ticket.query}</td>
  <td><ul>{ticket.answer.map((answe,id)=>
    <li key={id} >{answe}</li>
  )}</ul></td>
  <td><button  class='deletebtn'onClick={()=>{handleDelete(ticket._id)}}>Delete Ticket</button></td>
  </tr>
  
  )}
</table>
        
    )
}

export default Myticket
