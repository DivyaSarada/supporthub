import { Link } from "react-router-dom";
import "./studentnav.css";
import { useHistory } from "react-router-dom";

import React, { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";

function StudentNav() {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);
  const handleLogout = (e) => {
    localStorage.clear();
    setUser(false);
    history.push("/");
  };

  return (
    <div className="studentnav">
      <div className="navcontainer">
        <Link class='Link' to="/student/createticket">CREATE TICKET</Link>
        <Link class='Link' to="/student/mytickets">MY TICKETS</Link>
      </div>
      <button
        style={{
          fontSize: "2rem",
          position: "fixed",
          top: "13px",
          right: "5px",
          alignItems: "center",
        }}
        onClick={(e) => handleLogout(e)}
      >
        Logout
      </button>
    </div>
  );
}

export default StudentNav;
