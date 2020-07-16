import React, { useEffect, useState } from 'react';
import { Post } from '../Components/Post';

export const SinglePost = ({ match }) => {
  // 'http://localhost:1337/posts/1'
  const { id } = match.params;
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await res.json();
      console.log(data);
      setPost(data);
    };
    fetchPost();
  }, []);

  // Takes a moment for image to load
  return <>{post.image ? <Post post={post} /> : <>Loading</>} </>;
};
