import './Feed.css';

import { PostTwitter } from './post/post';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { NewPostTwitter } from './postNewTwitte';
import { homePosts } from '../../data/posts/homePosts';
import { useEffect, useState } from 'react';

export const FeedTwitter = () => {
  const [newPosts, setNewPosts] = useState([]);

  const nombreDeUsuario = localStorage.getItem('githubName');
  const nombreUsuarioGitHub = localStorage.getItem('githubUsername');

  const addNewPost = (text) => {
    const newPost = {
      id: Date.now(),
      text: text,
      name: nombreDeUsuario,
      username: nombreUsuarioGitHub,
    };

    setNewPosts((prevNewPosts) => [newPost, ...prevNewPosts]);

    const allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    allPosts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(allPosts));
  };

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const combinedPosts = [...storedPosts, ...homePosts];
    localStorage.setItem('posts', JSON.stringify(combinedPosts));
    setNewPosts(combinedPosts);
  }, []);

  return (
    <div className='feed'>
      <div className='header-feed'>
        <h2>Home</h2>

        <div className='post-new-twitte'>
          <NewPostTwitter onPostText={addNewPost} />
        </div>
      </div>

      <div className='posts'>
        {newPosts
          .filter((post) => post.id > 31)
          .map((post) => (
            <PostTwitter
              userName={post.username}
              name={post.name}
              text={post.text}
              isVerified={post.isVerified}
              mediaPost={post.mediaPost}
              Verified={VerifiedIcon}
              RepeatIcon={RepeatIcon}
              LikeIcon={FavoriteBorderIcon}
              CommentIcon={ChatBubbleOutlineIcon}
              ViewsIcon={EqualizerIcon}
              numsComments={post.numsComments}
              numsRetweets={post.numsRetweets}
              numsLikes={post.numsLikes}
              numsViews={post.numsViews}
              id={post.id}
              key={post.id}
            />
          ))}
      </div>
    </div>
  );
};
