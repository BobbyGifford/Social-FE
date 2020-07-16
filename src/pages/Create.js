import React, { useState } from 'react';

export const Create = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description) {
      setError('Description required');
      return;
    }

    if (!file) {
      setError('Image required');
      return;
    }

    const formData = new FormData();
    formData.append('data', JSON.stringify({ description }));
    formData.append('files.image', file);

    try {
      const res = await fetch('http://localhost:1337/posts', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      console.log(data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className='Create'>
      <h2>Create</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          placeholder='Description'
          value={description}
          onChange={(e) => {
            setError(null);
            setDescription(e.target.value);
          }}
        />
        <input
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
