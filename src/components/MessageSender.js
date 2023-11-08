import React, { useState } from "react";
import "../styles/MessageSender.css";
import { Avatar } from "@mui/material";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import CreatePost from "./CreatePost";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // some clever db stuff

    setInput("");
    setImageUrl("");
  };
  const [isPostPopup, setIsPostPopup] = useState(false);

  const togglePostPopup = () => {
    setIsPostPopup(!isPostPopup);
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar />
        <form>
          <input
          value={input}
          onClick={togglePostPopup}
            className="messageSender_input"
            placeholder="What's on your mind"
          />
          { isPostPopup &&  <CreatePost onClose={togglePostPopup}/> }
          <button onClick={togglePostPopup} type="submit" className="messageSender-btn">
            Hidden Submit
          </button>
          { isPostPopup &&  <CreatePost onClose={togglePostPopup} /> }
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo / Video</h3>
        </div>
        <div className="messageSender_option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender_option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling / Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
