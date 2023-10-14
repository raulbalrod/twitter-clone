import React, { useState } from 'react';

import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [name, setName] = useState('');
  const [githubUsername, setGithubUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('githubName', name);
    localStorage.setItem('githubUsername', githubUsername);

    navigate('/home');
  };

  return (
    <div className='log-page'>
      <div className='main-login'>
        <img
          src='https://freelogopng.com/images/all_img/1690643777twitter-x%20logo-png-white.png'
          alt='twitter-img'
          width='300px'
          height='300px'
        />

        <div className='join-content'>
          <h1>
            What's happening <br /> now
          </h1>
          <h3>Join Today</h3>

          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Github username'
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
          />

          <button className='login-btn' onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
