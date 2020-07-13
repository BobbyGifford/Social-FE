import React from 'react';
import './App.css';
import { Post } from './components/Post';
import postData from './data';

function App() {
  return (
    <div className='App'>
      <Post post={postData} />
    </div>
  );
}

export default App;
