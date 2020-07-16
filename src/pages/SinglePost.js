import React, { useEffect, useState } from 'react';
import { Post } from '../Components/Post';

export const SinglePost = ({ match }) => {
  // 'http://localhost:1337/posts/1'
  const { id } = match.params;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`http://localhost:1337/posts/${id}`);
      const data = await res.json();
      setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id]);

  return <>{loading ? <p>Loading</p> : <Post post={post} />}</>;
};
