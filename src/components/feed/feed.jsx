import './Feed.css';

import { githubUsers } from '../../data/users';
import { PostTwitter } from '../post/post';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { NewPostTwitter } from './postNewTwitte';

export const FeedTwitter = () => {
  return (
    <div className='feed'>
      <h2>Home</h2>

      <div className='post-new-twitte'>
        <NewPostTwitter />
      </div>

      <div className='posts'>
        {githubUsers.map((user) => (
          <PostTwitter
            userName={user.githubName}
            name={user.name}
            text={user.text}
            isVerified={user.isVerified}
            mediaPost={user.mediaPost}
            Verified={VerifiedIcon}
            RepeatIcon={RepeatIcon}
            LikeIcon={FavoriteBorderIcon}
            CommentIcon={ChatBubbleOutlineIcon}
            ViewsIcon={EqualizerIcon}
            key={user.id}
          />
        ))}
      </div>
    </div>
  );
};
