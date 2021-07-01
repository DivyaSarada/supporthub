import axios from "axios";
import React, { useEffect, useState } from "react";

function Unauthorizedstudents() {
  const [subject, setsubject] = useState("Student");
 const [mytickets,setmytickets] =useState([])
      const createTicket = (e) => {
       
      e.preventDefault();
     

      axios
        .post("https://tim-bunnyhug-76605.herokuapp.com/admin/unauthorizedusers", {
          "designation":  subject
        })
        .then((res) => {
            setmytickets(res.data);
            
          
        })
        .catch((err) => console.error(err));
        console.log(mytickets,subject)
    };
    useEffect(() => {
      axios
      .post("https://tim-bunnyhug-76605.herokuapp.com/admin/unauthorizedusers", {
        "designation":  subject
      })
      .then((res) => {
          setmytickets(res.data);
          
        
      })
      .catch((err) => console.error(err));
      console.log(mytickets,subject)
    }, [subject])


    const Deleteuser=(id,designation)=>{
        axios
        .post("https://tim-bunnyhug-76605.herokuapp.com/admin/unauthorizedusers/delete", {
          "designation":  designation,
          "id":id
        })
        .then((res) => {
            alert(res.data);
            
          
        })
        .catch((err) => console.error(err));
    }
    const Approveuser=(id,designation)=>{
        axios
        .post("https://tim-bunnyhug-76605.herokuapp.com/admin/unauthorizedusers/verify", {
          "designation":  designation,
          "id":id
        })
        .then((res) => {
            alert(res.data);
            
          
        })
        .catch((err) => console.error(err));
    }
    return (
      <div>
        <form onSubmit={createTicket} style={{fontSize:"1.6rem" ,margin:'10px'}}>
          <label for="subject">Select a subject</label>
          <select style={{margin:"10px"}}
            name="subject"
            id="subject"
            onChange={(e) => {
              setsubject(e.target.value);
            }}
          >
            <option value="Student">student</option>
            <option value="Faculty">faculty</option>
          </select>

        </form>
        <table className="myticket">
       <thead>{subject=='Faculty'? <tr>
          <th>Email</th>
          <th>Designation</th>
          <th>ID</th>
          <th>name</th>
          <th>approve</th>
          <th>delete</th>
        </tr>: <tr>
          <th>Email</th>
         
          <th>ID</th>
          <th>name</th>
          <th>approve</th>
          <th>delete</th>
        </tr>}</thead>
        {subject=='Faculty' ?mytickets.length!=0?(
          mytickets.map((ticket) => (
            <tr>
              <td>{ticket.email}</td>
              <td>{ticket.faccultyDesignation}</td>
              <td>{ticket.collegeid}</td>
              <td>{ticket.name}</td>
              <td>
                <button onClick={() => Approveuser(ticket._id,"Faculty")}>
                  Approve
                </button>
              </td>
              <td>
                <button onClick={() => Deleteuser(ticket._id,"Faculty")}>
                  delete
                </button>
              </td>
            </tr>
          ))
        ):<tr></tr>: subject=='Student' ?mytickets.length!=0?(
            mytickets.map((ticket) => (
                <tr>
                  <td>{ticket.email}</td>
                  <td>{ticket.collegeid}</td>
                  <td>{ticket.name}</td>
                  <td>
                    <button class="approvebtn" onClick={() => Approveuser(ticket._id,"Student")}>
                      Approve
                    </button>
                  </td>
                  <td>
                    <button class="deletebtn"onClick={() => Deleteuser(ticket._id,"Student")}>
                      delete
                    </button>
                  </td>
                </tr>
              ))
        ):<tr></tr>:<tr></tr>
        }
      </table>
       </div>
    );
  };


export default Unauthorizedstudents;
