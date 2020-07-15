import React, { useState } from 'react';

export const Create = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  console.log(file);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('data', JSON.stringify({ description }));
    formData.append('files.image', file);

    await fetch('http://localhost:1337/posts', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className='Create'>
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Description'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          placeholder='Add a file'
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
        />
        <input value='Submit' type='submit' />
      </form>
    </div>
  );
};
