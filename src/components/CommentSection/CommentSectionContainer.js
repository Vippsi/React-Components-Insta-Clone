// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments




console.log(props)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}

      {
        props.comments.map(singleComment => {
          console.log(singleComment)
          return <Comment comment={singleComment}/>
        }) 
      }
      <CommentInput/>
    </div>
  );
};

export default CommentSection;
