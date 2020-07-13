import React, { useState, useEffect } from 'react';
import './App.css';
import { Post } from './components/Post';
import postData from './data';

const mockPosts = [postData, postData, postData];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  return (
    <div className='App'>
      <Post posts={posts} />
    </div>
  );
}

export default App;
