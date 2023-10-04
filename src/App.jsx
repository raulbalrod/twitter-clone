import './App.css';

import { githubUsers } from './data/users';
import { SideBar } from './components/menu/sideBar';
import { PostTwitter } from './components/post/post';

import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function App() {
  return (
    <>
      <SideBar />

      <div className='posts'>
        {githubUsers.map((user) => (
          <PostTwitter
            userName={user.githubName}
            name={user.name}
            key={user.id}
            RepeatIcon={RepeatIcon}
            LikeIcon={FavoriteBorderIcon}
            CommentIcon={ChatBubbleOutlineIcon}
            ViewsIcon={EqualizerIcon}
          />
        ))}
      </div>
    </>
  );
}

export default App;
