import React from "react";
import "../styles/Post.css";
import { Avatar } from "@mui/material";
import {
  ChatBubbleOutline,
  NearMe,
  ThumbUp,
} from "@mui/icons-material";

const Post = ({ image, name, massage, profilepic, like, comment }) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilepic} className="post_avatar" />
        <div className="post_topInfo">
          <h3>{name}</h3>
        </div>
      </div>
      <div className="post_bottom">
        <p>{massage}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="postimage" />
      </div>
      <div className="post_options">
        <div className="post_option">
          <ThumbUp />
          <p>{like}</p>
        </div>
        <div className="post_option">
          <ChatBubbleOutline />
          <p>{comment}</p>
        </div>
        <div className="post_option">
          <NearMe />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
