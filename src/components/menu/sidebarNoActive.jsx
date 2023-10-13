import './SideBar.css';
import '../popups/Popup.css';

import { SideBarOption } from './sideBarOption';

import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Popup } from '../popups/popup';
import { PopupPremium } from '../popups/popupPremium';
import { PPPremium } from '../popups/ppPremium';
import { PopupChangeStyles } from '../popups/popupChangeStyle';
import { PPStyles } from '../popups/ppStyles';
import { PopupNewPosts } from '../popups/popupNewPost';
import { NewPostTwitter } from '../feed/postNewTwitte';
import { homePosts } from '../../data/posts/homePosts';

export const SideBarNoActiveHome = () => {
  const [btnPopup, setBtnPopup] = useState(false);
  const [btnPopupPremium, setBtnPopupPremium] = useState(false);
  const [btnPopupChangeStyle, setBtnPopupChangeStyle] = useState(false);
  const [btnPopupNewPost, setBtnPopupNewPost] = useState(false);

  const [newPosts, setNewPosts] = useState([]);

  const addNewPost = (text) => {
    const newPost = {
      id: Date.now(),
      text: text,
      name: 'Raul Balrod',
      username: 'raulbalrod',
    };

    setNewPosts((prevNewPosts) => [newPost, ...prevNewPosts]);

    const allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    allPosts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(allPosts));
  };

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const combinedPosts = [...storedPosts, ...homePosts];
    setNewPosts(combinedPosts);
  }, []);

  return (
    <div className='sideBar'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <TwitterIcon className='twitter-icon' />
      </Link>

      <Link to='/home' style={{ textDecoration: 'none' }}>
        <SideBarOption Icon={HomeIcon} textIcon='Home' />
      </Link>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption Icon={TagIcon} textIcon='Explore' />
      </button>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption Icon={NotificationsIcon} textIcon='Notifications' />
      </button>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption Icon={MailOutlineIcon} textIcon='Messages' />
      </button>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption
          Icon={ListAltIcon}
          textIcon='Lists'
          onClick={() => setBtnPopup(true)}
        />
      </button>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption Icon={BookmarkBorderIcon} textIcon='Bookmarks' />
      </button>

      <button
        className='btn-popup-sidebar'
        onClick={() => setBtnPopupPremium(true)}
      >
        <SideBarOption Icon={TwitterIcon} textIcon='Premium' />
      </button>

      <button className='btn-popup-sidebar' onClick={() => setBtnPopup(true)}>
        <SideBarOption Icon={PersonOutlineIcon} textIcon='Profile' />
      </button>

      <button
        className='btn-popup-sidebar'
        onClick={() => setBtnPopupChangeStyle(true)}
      >
        <SideBarOption Icon={MoreHorizIcon} textIcon='More' />
      </button>

      <button className='sideBar-post' onClick={() => setBtnPopupNewPost(true)}>
        Post
      </button>

      <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
        <div className='function-no-avaible'>
          <h3>
            <i>
              This function is not available for now in this version of the
              Twitter clone/ x
            </i>
          </h3>
          <img
            src='https://media.tenor.com/RpghvJN-ucgAAAAM/sorry.gif'
            alt='srry-gif'
          />
        </div>
      </Popup>

      <PopupNewPosts trigger={btnPopupNewPost} setTrigger={setBtnPopupNewPost}>
        <NewPostTwitter onPostText={addNewPost} />
      </PopupNewPosts>

      <PopupPremium trigger={btnPopupPremium} setTrigger={setBtnPopupPremium}>
        <PPPremium />
      </PopupPremium>

      <PopupChangeStyles
        trigger={btnPopupChangeStyle}
        setTrigger={setBtnPopupChangeStyle}
      >
        <PPStyles />
      </PopupChangeStyles>
    </div>
  );
};
