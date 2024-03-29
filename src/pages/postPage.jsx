import { useParams } from 'react-router-dom';

import './PostPage.css';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import VerifiedIcon from '@mui/icons-material/Verified';

import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';
import { IndividualPost } from '../components/individualPost/individualPost';
import { ReplyPost } from '../components/feed/replyPost';
import { useEffect, useState } from 'react';
import { SideBarNoActiveHome } from '../components/menu/sidebarNoActive';
import { Replys } from '../components/individualPost/replys';

export const IndividualPostPage = () => {
  const { usernamePost } = useParams();
  const post = getPostDestails(usernamePost);

  const [newReplys, setNewReplys] = useState([]);

  const nombreDeUsuario = localStorage.getItem('githubName');
  const nombreUsuarioGitHub = localStorage.getItem('githubUsername');

  const addNewReply = (text) => {
    const newReply = {
      id: Date.now(),
      text: text,
      name: nombreDeUsuario,
      username: nombreUsuarioGitHub,
    };
    setNewReplys((prevReplys) => [newReply, ...prevReplys]);

    const allReplys = JSON.parse(localStorage.getItem('replys')) || [];
    allReplys.unshift(newReply);
    localStorage.setItem('replys', JSON.stringify(allReplys));
  };

  useEffect(() => {
    const storedReplys = JSON.parse(localStorage.getItem('replys')) || [];
    const combinedReplys = [...newReplys, ...storedReplys];
    setNewReplys(combinedReplys);
  }, []);

  return (
    <div className='app'>
      <SideBarNoActiveHome />

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
            <ReplyPost onReplyText={addNewReply} />
          </div>

          <div className='replys'>
            {newReplys.map((reply) => (
              <Replys
                userName={reply.username}
                name={reply.name}
                text={reply.text}
                isVerified={reply.isVerified}
                Verified={VerifiedIcon}
                RepeatIcon={RepeatIcon}
                LikeIcon={FavoriteBorderIcon}
                CommentIcon={ChatBubbleOutlineIcon}
                ViewsIcon={EqualizerIcon}
                id={reply.id}
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
