import React, { useState } from 'react';

export const ReplyPost = ({ onReplyText }) => {
  const nombreUsuarioGitHub = localStorage.getItem('githubUsername');

  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePostClick = () => {
    if (text.trim() !== '') {
      onReplyText(text);
      setText('');
    }
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
          placeholder='Post your reply'
          value={text} // Enlaza el valor del textarea con el estado 'text'
          onChange={handleTextChange}
        ></textarea>
        <button className='feed-new-post-btn' onClick={handlePostClick}>
          Reply
        </button>
      </div>
    </div>
  );
};
