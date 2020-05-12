/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import "./components/PostsContainer/PostsPage"
import "./components/SearchBar/SearchBarContainer"
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import data from "./dummy-data"
import LikeSection from "./components/PostsContainer/LikeSection";

const App = () => {
  
  const [postData, setNewPostData] = useState(data)
  console.log(postData)
  return (
    <div className="App">
      {/* Add imported components here to render them */}
      
        
        <SearchBar/>
        <PostsPage postPage={postData} setPostPage={setNewPostData}/>
    </div>
  );
};

export default App;
