import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={`/${post.id}`} key={post.id}>
          <Post post={post} />
        </Link>
      ))}
    </div>
  );
};
