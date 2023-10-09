import React, { useState } from 'react';

export const NewPostTwitter = ({ onPostText }) => {
  const [username, setUsername] = useState('raulbalrod');
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handlePostClick = () => {
    onPostText(text);
    setText('');
  };

  return (
    <div className='new-post'>
      <div>
        <img
          src={`https://unavatar.io/${username}`}
          alt='img-profile'
          width='50px'
        />
        <textarea
          name='post'
          className='textarea-new-post'
          placeholder='What is happening?!'
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>

      <div>
        <input type='file' />

        <button onClick={handlePostClick} className='feed-new-post-btn'>
          Post
        </button>
      </div>
    </div>
  );
};
