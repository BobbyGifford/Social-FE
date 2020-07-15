import React, { useState, useEffect } from 'react';
import { Post } from '../Components/Post';

export const Home = () => {
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
    <div className='Home'>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
