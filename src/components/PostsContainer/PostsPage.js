//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 


const PostsPage = (props) => {
  // set up state for your data
  



  const {postPage} = props
  console.log(props)
  

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {
        postPage.map(singlePost => {
          return <Post post={singlePost}/>
        })
      }
      
      
      
    </div>
  );
};

export default PostsPage;
