import './Feed.css';

import { PostTwitter } from './post/post';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { NewPostTwitter } from './postNewTwitte';
import { homePosts } from '../../data/posts/homePosts';
import { Link } from 'react-router-dom';

export const FeedTwitter = () => {
  return (
    <div className='feed'>
      <div className='header-feed'>
        <h2>Home</h2>

        <div className='post-new-twitte'>
          <NewPostTwitter />
        </div>
      </div>

      <div className='posts'>
        {homePosts.reverse().map((post) => (
          <Link
            to={`/${post.username}/status/${post.id}`}
            style={{ textDecoration: 'none' }}
          >
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
              key={post.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
