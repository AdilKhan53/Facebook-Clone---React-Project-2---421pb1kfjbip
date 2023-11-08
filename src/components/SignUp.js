import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getuser } from '../utils/UserSlice';
import facebook from "../images/facebook.svg";
import Login from './Login';
import "../styles/Login.css"

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [doesLoginBtn, setDoesLoginBtn] = useState(false);
    const dispatch = useDispatch([]);

    let headersList = {
        "projectId": "421pb1kfjbip",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
       name: name,
       email: email,
       password: password,
       "appType": "facebook"
       });

       async function signup(){

        const response = await fetch("https://academics.newtonschool.co/api/v1/user/signup", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });

       let data = await response.json();
       console.log(data);
       dispatch(getuser(data));
       }
       function handleSingUp() {
        signup();
      }
       
       
       
      return doesLoginBtn ? (
        <Login />
      ) : (
        <>
    
    <div className="login">
            {/* for first half */}
            <div className="first-half">
              <img  src={facebook} alt="Facebook" />
              <p>
              Facebook helps you connect and share with the people in your life.
              </p>
            </div>
    
    
            {/* for second half */}
            <div className="second-half" >
            <div className="container">
                <div className="card">
                  <h1>
                    Create Account
                  </h1>
                  <form onClick={(e) => e.preventDefault()} className="form">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="Name"
                      className="input"
                    />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email"
                      className="input"
                    />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      placeholder="Password"
                      className="input"
                    />
                    <button
                      onClick={() => {
                        handleSingUp();
                        alert("User created, go to login page");
                      }}
                      type="submit"
                      className="login-btn"
                    >
                      Sign Up
                    </button>
                    <p className="para2">Already have an account?</p>
                    <button
                    onClick={() => setDoesLoginBtn(true)}
                    className="btn"
                  >
                    Log in
                  </button>
                  </form>
                </div>
                <p className="page">
            <span
              onClick={() => {
                alert("Please, Create account first!!");
              }}
            >
              Create a page{" "}
            </span>
            for a celebrity, brand or business.
          </p>
              </div>
            </div>
          </div>
        </>
      );
    };
    
    export default SignUp;