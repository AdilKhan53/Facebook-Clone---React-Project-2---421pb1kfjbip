import React, { useEffect, useState } from 'react';
import "../styles/Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import { useDispatch } from 'react-redux';
import { getProduct } from '../utils/ProductSlice';

function Feed() {
  const dispatch = useDispatch([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPost() {
      var headersList = {
        "projectID": "421pb1kfjbip"
       }
       
       const response = await fetch("https://academics.newtonschool.co/api/v1/facebook/post?limit=100", { 
         method: "GET",
         headers: headersList
       });
       
       const data = await response.json();
       dispatch(getProduct(data.data));
       //console.log(data.data);
       setPosts(data.data);
    }
    getPost();
  }, []);
  return (
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        {posts && posts.map((element) =>{
          return(
            <div key={element._id}>
              <Post
                name={element.author.name}
                profilepic={element.author.profileImage}
                massage={element.content}
                image={element.channel.image}
                like={element.likeCount}
                comment={element.commentCount}
              />
            </div>
          )
        })}

    </div>
  )
}

export default Feed