import './Feed.css';

import { PostTwitter } from './post/post';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { NewPostTwitter } from './postNewTwitte';
import { homePosts } from '../../data/posts/homePosts';
import { useState } from 'react';

export const FeedTwitter = () => {
  const [postText, setPostText] = useState('');
  const [newPosts, setNewPosts] = useState([]);

  const addNewPost = (text) => {
    const newPost = {
      text: text,
      id: Date.now(),
      name: 'Raul Balrod',
      username: 'raulbalrod',
    };
    setNewPosts((prevNewPosts) => [newPost, ...prevNewPosts]);
  };

  const combinedPosts = [...homePosts, ...newPosts];

  return (
    <div className='feed'>
      <div className='header-feed'>
        <h2>Home</h2>

        <div className='post-new-twitte'>
          <NewPostTwitter onPostText={addNewPost} />
        </div>
      </div>

      <div className='posts'>
        {combinedPosts
          .filter((post) => post.id > 31)
          .reverse()
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
