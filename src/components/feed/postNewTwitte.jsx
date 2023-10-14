import React, { useState } from 'react';

export const NewPostTwitter = ({ onPostText }) => {
  const nombreUsuarioGitHub = localStorage.getItem('githubUsername');

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePostClick = () => {
    onPostText(text);
    setText('');
  };

  return (
    <div className='new-post'>
      <div>
        <img
          src={`https://unavatar.io/${nombreUsuarioGitHub}`}
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

        <button onClick={handlePostClick} className='feed-new-post-btn'>
          Post
        </button>
      </div>
    </div>
  );
};
