import React from 'react';

const API_URL = 'http://localhost:1337';
const formatImageUrl = (url) => `${API_URL}${url}`;

export const Post = ({ post }) => {
  const url = post?.image[0]?.formats?.medium?.url;
  const desc = post.description;
  const likes = post.likes;

  return (
    <div className='Post'>
      <img
        className='Post__Image'
        src={formatImageUrl(url)}
        alt='Post thumbnail'
      />
      <h4>{desc}</h4>
      <div>
        <span>Likes: {likes}</span>
      </div>
      <br />
    </div>
  );
};
