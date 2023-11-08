import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useSelector } from "react-redux";


function App() {
  const lUser = localStorage.getItem("fblogin");

  const localUser = JSON.parse(lUser);
  const user = useSelector((store) => store.user.userDetails || localUser);
  //console.log(user);
  //console.log(lUser);

  return (
    <div className="App">
      {!user?.data && <Login />}

      {user?.data && (
        <>
          <Header />

          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
