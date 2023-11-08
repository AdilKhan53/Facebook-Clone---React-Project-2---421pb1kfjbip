import React, { useState } from "react";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { getuser } from "../utils/UserSlice";
import facebook from "../images/facebook.svg";
import SignUp from "./SignUp";
import UpdatePassword from "./UpdatePassword";
import { Opacity } from "@mui/icons-material";
import CreatePageDivert from "./CreatePageDivert";
import { Link, createBrowserRouter } from "react-router-dom";

// let appRouter = createBrowserRouter([{
//   path:"/createPage",
//   element:<CreatePageDivert/>
// }])

function Login() {
  const dispatch = useDispatch([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [doesLoginBtn, setDoesLoginBtn] = useState(true);
  const [isPopup, setIsPopup] = useState(false);

  var headersList = {
    projectId: " 421pb1kfjbip",
    "Content-Type": "application/json",
  };

  var bodyContent = JSON.stringify({
    email: email,
    password: password,
    appType: "facebook",
  });

  const login = async () => {
    try {
      let response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        }
      );

      let result = await response.json();
      setData(result);
      dispatch(getuser(result));

      localStorage.setItem(
        "fblogin",
        JSON.stringify({
          data: {
            email: result.data.email,
            name: result.data.name,
          },
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    login();
  };

  const togglePasswordPopup = () => {
    setIsPopup(!isPopup);
  };

  return !doesLoginBtn ? (
    <SignUp />
  ) : (
    // <UpdatePassword/>
    <>
      <div className="login">
        {/* for first half */}
        <div className="first-half">
          <img src={facebook} alt="Facebook" />
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        {/* for second half */}
        <div className="second-half">
          <div className="container">
            <div className="card">
              <h1>Login</h1>
              <form onClick={(e) => e.preventDefault()} className="form">
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
                  onClick={handleLogin}
                  type="submit"
                  className="login-btn"
                >
                  Log in
                </button>
                <p onClick={togglePasswordPopup} className="para1">
                  Forgotten password?
                </p>
                {isPopup && <UpdatePassword onClose={togglePasswordPopup} />}
                <p className="para2">Don't have an account?</p>
                <button onClick={() => setDoesLoginBtn(false)} className="btn">
                  Create new account
                </button>
              </form>
            </div>
            <div className="page">
            <span
              onClick={() => {
                alert("Please, Login first!!");
              }}
            >
              Create a page {" "}
            </span>
            for a celebrity, brand or business.
          </div>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Login;
