import React, { useState, useEffect } from 'react';
import './App.css';
import { Post } from './components/Post';
import postData from './data';

const mockPosts = [postData, postData, postData];

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define API call as async function
    const getPosts = async () => {
      const res = await fetch('http://localhost:1337/posts');
      const data = await res.json();
      setPosts(data);
    };
    // Call api
    getPosts();
  }, []);

  return (
    <div className='App'>
      <Post posts={posts} />
    </div>
  );
}

export default App;
