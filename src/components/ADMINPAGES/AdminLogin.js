import React, { useContext, useEffect, useState } from "react";
import LockIcon from "@material-ui/icons/Lock";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import axios from 'axios';
import { UserContext } from "../../UserContext";
import { useHistory } from "react-router-dom";
import './adminlogin.css'

function AdminLogin() {
    const [Email, setEmail] = useState("")
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const history = useHistory();
    const { user, setUser,setDesignation } = useContext(UserContext);
    const handleLogin = (e) => {
        e.preventDefault();
        axios
          .post("https://tim-bunnyhug-76605.herokuapp.com/login/admin", { email, password })
          .then((res) => {
            if (res.data.message == "allow") {
              localStorage.setItem("user", JSON.stringify(res.data));
              setUser(true)
              setDesignation(res.data.designation)
              console.log(res.data.designation)
              history.push('/admin/homepage')
            }else{
             alert("wrong user credentials")
             console.log(res.data)
            }
          })
          .catch((err) => console.error(err));
      };
    return (
        <div className="adminhome">
           <form className="card" onSubmit={(e) => handleLogin(e)}>
          <h1>Admin login</h1>
          <div className="logininput">
            <input
              type="email"
              placeholder="Mail"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <MailOutlineIcon fontSize="large" />
          </div>
          <div className="logininput">
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <LockIcon fontSize="large" />
          </div>
          <div>
            <button className="login-btn" type="submit">
              Login
            </button>
          </div>
        </form>
        </div>
    )
}

export default AdminLogin
