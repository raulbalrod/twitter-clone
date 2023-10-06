import './SideBar.css';

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

export const SideBar = () => {
  return (
    <div className='sideBar'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <TwitterIcon className='twitter-icon' />
      </Link>

      <Link to='/home' style={{ textDecoration: 'none' }}>
        <SideBarOption active Icon={HomeIcon} textIcon='Home' />
      </Link>

      <SideBarOption Icon={TagIcon} textIcon='Explore' />
      <SideBarOption Icon={NotificationsIcon} textIcon='Notifications' />
      <SideBarOption Icon={MailOutlineIcon} textIcon='Messages' />
      <SideBarOption Icon={ListAltIcon} textIcon='Lists' />
      <SideBarOption Icon={BookmarkBorderIcon} textIcon='Bookmarks' />
      <SideBarOption Icon={TwitterIcon} textIcon='Premium' />
      <SideBarOption Icon={PersonOutlineIcon} textIcon='Profile' />
      <SideBarOption Icon={MoreHorizIcon} textIcon='More' />

      <button className='sideBar-post'>Post</button>
    </div>
  );
};
