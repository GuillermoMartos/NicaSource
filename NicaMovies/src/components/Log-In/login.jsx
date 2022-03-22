import "./login.sass";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  var [log, setLog] = useState({
    username: "",
    password: "",
  });
  var [con, setCon] = useState(false);

  useEffect(() => {}, [con]);

  function handleChange(e) {
    let value = e.target.value;
    setLog({
      ...log,
      [e.target.name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios({
        method: "GET",
        // headers: {'Authorization': {username:log.}},
        // auth:'username:user, password:django',
        url: `https://commentator2.herokuapp.com/user/login/${log.username}`,
      }).then((res) => {
        localStorage.setItem("NicaMovieUser", res.data.username);
        setCon(!con);
        setLog({ username: "", password: "" });
      });
    } catch (error) {
      return alert(
        `no user "${log.username}" founded or pass incorrect, try again please`
      );
    }
  }

  async function handleLogOff(e) {
    e.preventDefault();
    localStorage.removeItem("NicaMovieUser");
    setCon(!con);
    document.getElementById("move-div").style.marginLeft = "-110%"
    document.getElementById("move-cdiv").style.marginLeft = "-110%"
  }

  function openRegister() {
    document.getElementById("move-register").style.marginLeft = "10%";
  }

  if (localStorage.getItem("NicaMovieUser")) {
    return (
      <div id="nav" className="nav">
        <div className="logo">
          <img
            className="logo"
            alt="logo"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/terminator-2-1625381678.jpg"
            width="90px"
          />
        </div>

        <h2 className="NM"> Commentator2 <br/> <span> Judgament time 😎</span> </h2>
        
        <div className="Log">

          <form className="form" onSubmit={handleLogOff}>
            <button className="btn-log" type="submit">
              <h4>LOG OUT</h4>
            </button>
          </form>
        </div>
      </div>
    );
  } else
    return (
      <div className="nav">
      
        <h1 className="NM"> Commentator2</h1>
        <h5 className="JT"> Judgament time 😎</h5>
   
        <div className="logo">
          <img
            className="logo"
            alt="logo"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/terminator-2-1625381678.jpg"
            width="90px"
          />
        </div>

        <div className="Log">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              <h4>Mail</h4>
            </label>

            <input
              className="input"
              name="username"
              value={log.username}
              id="myInput"
              onChange={(e) => handleChange(e)}
              required
              autoComplete="off"
            />

            <label>
              <h4>Password</h4>
            </label>

            <input
              className="input"
              name="password"
              type="password"
              value={log.password}
              onChange={(e) => handleChange(e)}
              required
              autoComplete="off"
            />
            <button className="btn-log" type="submit">
              <h4>LOG IN</h4>
            </button>
            <button
              type="button"
              className="btn-log"
              onClick={() => openRegister()}
            >
              <h4>SIGN UP</h4>
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login;
