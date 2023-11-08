import React from 'react';
import "../styles/StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
      image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
      profileSrc="https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="You"
      />
      <Story
      image="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      profileSrc="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Asif khan"
      />
      <Story
      image="https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      profileSrc="https://images.unsplash.com/photo-1502325966718-85a90488dc29?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Rajat Kumar"
      />
      <Story
      image="https://images.unsplash.com/photo-1585020430145-2a6b034f7729?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      profileSrc="https://images.unsplash.com/photo-1507835661088-ac1e84fe645f?auto=format&fit=crop&q=80&w=1924&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Shabira Mirza"
      />
      <Story
      image="https://images.unsplash.com/photo-1526779259212-939e64788e3c?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      profileSrc="https://plus.unsplash.com/premium_photo-1661658151344-d0ba31ed3c85?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Mandeep Singh"
      />

    </div>
  )
}

export default StoryReel