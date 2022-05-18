import "./SignUpPage.css";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logo from "./logo.png";

function SignUpPage() {
  const [status, setStatus] = useState("Existing User");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [measurements, setMeasure] = useState({
    'Waist' : 0,
    'Bust/Chest' : 0,
    'Inseam' : 0,
    'Arm Length' : 0,
    'Neckline' : 0,
    'Low Hip' : 0
  });
  const [navigate, setNav] = useState("/measurements");
  let nav = useNavigate();

  const handleInput = (event) => {
    if (event.target.name === "username") {
      setUser(event.target.value);
    } else if (event.target.name === "password") {
      setPass(event.target.value);
    } else {
      setMeasure({
        'Waist' : 0,
        'Bust/Chest' : 0,
        'Inseam' : 0,
        'Arm Length' : 0,
        'Neckline' : 0,
        'Low Hip' : 0
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`https://anastatiad.pythonanywhere.com/signupLP`, {
        'username': username,
        'password': password,
        'measurements': measurements,
        'logged' : ''
      })
      .then(
        (response) => {
          var result = response.data;
          setStatus(result.status);
          console.log(result);
          if (status === "Existing User") {
            setNav("/login");
          } else {
            setNav("/measurements");
          }
        },
        (error) => {
          console.log(error);
        }
      );
    if (status === "Existing User") {
      setNav("/login");
    }
  };

  return (
    <div className="SignUpPage">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <h1>Shop$i</h1>
      <h3 className="desc">Shop with your size</h3>
      <br></br>
      <div className="signup">
        <form>
          <h2>Sign Up</h2>
          <div className="user-info">
            <div className="box">
              <label className="infoName">First Name</label>
              <div className="infoBox">
                <input type="text" id="firstNameText" />
              </div>
            </div>

            <div className="box">
              <label className="infoName">Last Name</label>
              <div className="infoBox">
                <input type="text" id="lastNameText" />
              </div>
            </div>

            <div className="box">
              <label className="infoName">Username</label>
              <div className="infoBox">
                <input type="text" id="usernameText" name='username' onChange={handleInput}/>
              </div>
            </div>

            <div className="box">
              <label className="infoName">Password</label>
              <div className="infoBox">
                <input type="password" id="passwordText" name='password' onChange={handleInput}/>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            id="enter-info"
            onSubmit={async (event) => {
              nav(this.state.navigate);
            }}
          >
            <Link to={navigate}>Continue</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;