import { Link, useParams } from 'react-router-dom';

import './PostPage.css';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { SideBar } from '../components/menu/sideBar';
import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';
import { IndividualPost } from '../components/individualPost/individualPost';
import { ReplyPost } from '../components/feed/replyPost';
import { replys } from '../data/posts/replys';
import { Replys } from '../components/individualPost/replys';

export const IndividualPostPage = () => {
  const { usernamePost } = useParams();
  const post = getPostDestails(usernamePost);

  const randomNum = Math.floor(Math.random() * 10);

  return (
    <div className='app'>
      <SideBar />

      <div className='individual-posts'>
        <h2>Post</h2>
        <div className='feed-replys'>
          <IndividualPost
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
          <div className='post-new-twitte'>
            <ReplyPost />
          </div>

          <div className='replys'>
            {replys.slice(0, randomNum).map((reply) => (
              <Replys
                userNameReply={reply.username}
                name={reply.name}
                text={reply.text}
                isVerified={reply.isVerified}
                Verified={VerifiedIcon}
                RepeatIcon={RepeatIcon}
                LikeIcon={FavoriteBorderIcon}
                CommentIcon={ChatBubbleOutlineIcon}
                ViewsIcon={EqualizerIcon}
                numsComments={reply.numsComments}
                numsRetweets={reply.numsRetweets}
                numsLikes={reply.numsLikes}
                numsViews={reply.numsViews}
                key={reply.id}
              />
            ))}
          </div>
        </div>
      </div>

      <WidgetsTwitter />
    </div>
  );
};
