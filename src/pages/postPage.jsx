import { useParams } from 'react-router-dom';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { SideBar } from '../components/menu/sideBar';
import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';
import { PostTwitter } from '../components/feed/post/post';

export const IndividualPostPage = () => {
  const { usernamePost } = useParams();

  const post = getPostDestails(usernamePost);

  return (
    <div className='app'>
      <SideBar />

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

      <WidgetsTwitter />
    </div>
  );
};
