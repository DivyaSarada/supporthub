import React, { useContext, useEffect, useState } from "react";
import "../login.css";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import LockIcon from "@material-ui/icons/Lock";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import axios from "axios";
import { useHistory } from "react-router-dom";


import { UserContext } from "../../UserContext";

function Login() {
  const { user, setUser,setDesignation } = useContext(UserContext);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://tim-bunnyhug-76605.herokuapp.com/login/faculty", { email, password })
      .then((res) => {
        if (res.data.message == "allow") {
          localStorage.setItem("user", JSON.stringify(res.data));
          setUser(true)
          setDesignation("faculty")
          history.push('/faculty/homepage')
        }else{
          alert(res.data.message)
         console.log(res.data.message)
        }
      })
      .catch((err) => console.error(err));
  };
  const handleRegister = () => {};

  return (
    <>
      <div className="login">
        <form className="card" onSubmit={(e) => handleLogin(e)}>
          <h1>Faculty login</h1>
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
        <div>
          <Link to="/register/faculty" className="register-btn">
            Not Registered? Sign Up Here
          </Link>
          <Link   to="/" className="login-btn" >Home</Link>
        </div>{" "}
      </div>
    </>
  );
}

export default Login;
