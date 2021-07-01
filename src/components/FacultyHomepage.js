import axios from "axios";
import React, { useEffect, useState } from "react";
import './facultyhomepage.css'
function FacultyHomepage() {
  const [subject, setsubject] = useState("MICROPROCESSORS AND MULTICORE SYSTEMS");
  const [mytickets, setmytickets] = useState([]);
  const [answer, setanswer] = useState("");

  const handleAnswer = (id) => {
    console.log(answer)
    const ans = {
      "id": id,
      "answer": answer,
      "email":JSON.parse(localStorage.getItem("user")).email,
      "facultyname":JSON.parse(localStorage.getItem("user")).name,
    
    };
   
    document.getElementById(id).Value  =  ""
    axios
      .post("https://tim-bunnyhug-76605.herokuapp.com/answertoken", ans)
      .then((res) => {
        alert("answered")
        console.log(res);
      })
      .catch((err) => console.error(err));
      setanswer(" ")
  };

  const createTicket = (e) => {
    e.preventDefault();
    console.log(subject);

    axios
      .post("https://tim-bunnyhug-76605.herokuapp.com/gettickets", { "subject": [subject] })
      .then((res) => {if(res.data[0].message){
        setmytickets([]);}
        else{
          setmytickets(res.data)
        }
      })
      .catch((err) => console.error(err));
      setanswer("")
  };
  return (
    <div className="facultyhomepage">
      <form onSubmit={createTicket}>
        <label for="subject">Select a subject</label>
        <select
          name="subject"
          id="subject"
          onChange={(e) => {
            setsubject(e.target.value);
          }}
        >
  
          
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

        <input type="submit" value="tickets" />
      </form>
      <table className="myticket">
       <thead> <tr>
          <th>College Id</th>
          <th>Question</th>
          <th>Answer</th>
          <th>Submit</th>
        </tr></thead>
        {mytickets .length!=0 ? (
          mytickets.map((ticket) => (
            <tr>
              <td>{ticket.collegeId}</td>
              <td>{ticket.query}</td>
              <td>
              
                <p> {ticket.answer.map}</p>
                <textarea rows="4" cols="50" id={ticket._id} 
                  type="text"
                  
                  onChange={(e) => {
                    setanswer(e.target.value)
                  }}
                ></textarea>
              </td>
              <td>
                <button onClick={() => handleAnswer(ticket._id)}>
                  Submit Answer
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr></tr>
        )}
      </table>
    </div>
  );
}

export default FacultyHomepage;
