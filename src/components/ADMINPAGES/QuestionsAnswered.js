import axios from 'axios';
import React, { useEffect, useState } from 'react'

function QuestionsAnswered() {const [facultyarray, setfacultyarray] = useState([]) 
    useEffect(() => {
        
       
        axios
       .get("https://tim-bunnyhug-76605.herokuapp.com/admin/facultyanswers")
       .then(res => 
         {setfacultyarray(res.data)
        })
       .catch(err => console.error(err));
       console.log(facultyarray)

     
 },[])
 return (
        <div>
            <table className="myticket">
       <thead> <tr>
          <th>Email</th>
        
          <th>ID</th>
          <th>name</th>
          <th>count</th>
         
        </tr></thead>
        {facultyarray.length!=0?(
          facultyarray.map((faculty) => (
            <tr>
              <td>{faculty.email}</td>

              <td>{faculty.collegeid}</td>
              <td>{faculty.name}</td>
              <td>{faculty.count}</td>
             
            </tr>
          ))
        ):<tr></tr>
        }
      </table>
        </div>
    )
    
}

export default QuestionsAnswered
