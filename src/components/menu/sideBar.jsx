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

import { Button } from '@mui/material';

export const SideBar = () => {
  return (
    <div>
      <TwitterIcon className='twitter-icon' />

      <SideBarOption active Icon={HomeIcon} textIcon='Home' />
      <SideBarOption Icon={TagIcon} textIcon='Explore' />
      <SideBarOption Icon={NotificationsIcon} textIcon='Notifications' />
      <SideBarOption Icon={MailOutlineIcon} textIcon='Messages' />
      <SideBarOption Icon={ListAltIcon} textIcon='Lists' />
      <SideBarOption Icon={BookmarkBorderIcon} textIcon='Bookmarks' />
      <SideBarOption Icon={TwitterIcon} textIcon='Premium' />
      <SideBarOption Icon={PersonOutlineIcon} textIcon='Profile' />
      <SideBarOption Icon={MoreHorizIcon} textIcon='More' />

      <Button className='sideBar-post' fullWidth>
        Post
      </Button>
    </div>
  );
};
