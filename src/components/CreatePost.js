import React, { useState } from 'react'
import "../styles/CreatePost.css";
import { useSelector } from 'react-redux';

function CreatePost({onClose}) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const user = useSelector((store) => store.user.userDetails);
  // console.log(user.token);

    const handleCreatePost = () => {
        postData();
        onClose();
    }

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDU0ZjBiODYxY2ZmNjJkOTI3NWJmZSIsImlhdCI6MTY5OTM1NDk0NCwiZXhwIjoxNzMwODkwOTQ0fQ.PkCcz6cP0TG8Nj6pEDCJ4I5CD-LvCVaKLv6qOmvz3xY

    async function postData(){
      var headersList = {
        "Authorization": "Bearer " +user?.token,
        "projectId": "421pb1kfjbip",
        "Content-Type": "application/json"
       }
       
       var bodyContent = JSON.stringify({
             title: title,
             content: content,
             images: image
          });
       
       let response = await fetch("https://academics.newtonschool.co/api/v1/facebook/post/", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);
       

    }


  return (
    <div className='popup'>
        <h1>Create a Post</h1>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Post Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button
        className="popup-button"
        onClick={() => {
          handleCreatePost();
          alert("Posted");
        }}
        text="Create Post"
      >
        POST
      </button>
    </div>
  )
}

export default CreatePost