import React, { useState } from 'react';

export const Create = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('data', JSON.stringify({ description }));
    formData.append('files.image', file);

    try {
      const res = await fetch('http://localhost:1337/posts', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.statusCode === 400) {
        setError(data.message);
      }
    } catch (err) {
      setError('Sorry something went wrong. Try again.');
    }
  };

  return (
    <div className='Create'>
      <h2>Create</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder='Description'
          value={description}
          onChange={(e) => {
            setError(null);
            setDescription(e.target.value);
          }}
        />
        <input
          required
          placeholder='Add a file'
          onChange={(e) => {
            setError(null);
            setFile(e.target.files[0]);
          }}
          type='file'
        />
        <input value='Submit' type='submit' />
      </form>
    </div>
  );
};
