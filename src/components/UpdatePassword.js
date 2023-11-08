import React, { useState } from 'react'
import "../styles/UpdatePassword.css"
import { useSelector } from 'react-redux';

function UpdatePassword({onClose}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    
    const user = useSelector(store => store.user.userDetails);
   // console.log(user.token);

    const handleUpdatePassword = () => {
        onClose();
        updatePasswordApi();
    }

async function updatePasswordApi(){

    var headersList = {
        "projectId": "421pb1kfjbip",
        "Content-Type": "application/json",
        "Authorization": "Bearer "+user?.token
       }
       
       var bodyContent = JSON.stringify({
       name: name,
       email: email,
       passwordCurrent: currentPassword,
       password: newPassword,
       "appType": "facebook"
       });
       
       let response = await fetch("https://academics.newtonschool.co/api/v1/user/updateMyPassword", { 
         method: "PATCH",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       

}

  return (
    <div className='popup'>
        <h1>Update Password</h1>
        <span className="close" onClick={onClose}>&times;</span>
        <input
        type="text"
        required="required" 
        placeholder="Name"
        
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br></br>
      <input
        type="text"
        placeholder="Email"
        required="required" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Current Password"
        required="required" 
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        required="required" 
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button  className='popup-button' 
      
      onClick={()=>{handleUpdatePassword();
        alert("Password Upadate successfully, Please login");
    }} text="Create Post">Update Password</button>

    </div>
  )
}

export default UpdatePassword