

import Nav from './components/Nav';
import { Route, Link,Switch } from "react-router-dom";
import Register from './components/Register'
import { UserContext } from './UserContext';
import { useState ,useMemo, createContext, useEffect} from 'react';
import CreateTicket from './components/CreateTicket';
import Home from './components/Home';
import RegisterStudent from './components/Student/RegisterStudent'
import LoginStudent from './components/Student/LoginStudent'
import RegisterFaculty from './components/Faculty/RegisterFaculty'
import LoginFaculty from './components/Faculty/LoginFaculty'
import PrivateRouteStudent from './components/PrivateRouteStudent';
import PrivateRouteFaculty from './components/PrivateRouteFaculty';
import StudentNav from './components/Student/StudentNav'
import Myticket from './components/Myticket';
import Facultynav from './components/Faculty/Facultynav';
import FacultyHomepage from './components/FacultyHomepage';
import AdminNav from './components/ADMINPAGES/AdminNav';
import AdminLogin from './components/ADMINPAGES/AdminLogin';
import AdminHome from './components/ADMINPAGES/AdminHome';
import Unauthorizedstudents from './components/ADMINPAGES/Unauthorizedstudents';
import QuestionsAnswered from './components/ADMINPAGES/QuestionsAnswered';
import QuestionsPosted from './components/ADMINPAGES/QuestionsPosted';

export const Jwtcontext = createContext(null)

function App() {

  const [Jwt, setJwt] = useState(null)
  const [user,setUser]=useState(false)
  const [designation,setDesignation] = useState("")
  const options=["DBMS",'Data Structures','Python','C Programming','MPMS','Java Programming','OS']
  
 
  return (
    <div className="App">
       <Nav />
       <Switch>

    <UserContext.Provider value={{user,setUser,Jwt,setJwt,designation,setDesignation,options}}>
      <Route path='/' exact ><Home />  </Route>
     <Route path="/login/student" exact ><LoginStudent /></Route>
     <Route path="/register/student" exact><RegisterStudent /></Route>
     <Route path="/login/faculty" exact ><LoginFaculty /></Route>
     <Route path="/register/faculty" exact><RegisterFaculty /></Route>
     <PrivateRouteStudent path='/student' ><StudentNav /></PrivateRouteStudent>
     <PrivateRouteStudent path="/student/createticket" ><CreateTicket /></PrivateRouteStudent>
     <PrivateRouteStudent path="/student/mytickets" ><Myticket /></PrivateRouteStudent>
     <Route path='/faculty' ><Facultynav /></Route>
     <PrivateRouteFaculty path="/faculty/homepage" ><FacultyHomepage /></PrivateRouteFaculty>
     <Route path='/admin' exact ><AdminLogin /></Route>
     <Route path='/admin/:id' ><AdminNav /></Route>
     <Route path='/admin/homepage' ><AdminHome /></Route>
     <Route path='/admin/unautherized' ><Unauthorizedstudents /></Route>
     <Route path='/admin/facultyanswered' ><QuestionsAnswered /></Route>
     <Route path='/admin/studentsquestions' ><QuestionsPosted /></Route>






     </UserContext.Provider>
    </Switch>
         </div>
  );
}

export default App;
