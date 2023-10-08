import { Verified } from '@mui/icons-material';

import './Reply.css';
import { IteractionPost } from '../iteractionPost';
import { Link } from 'react-router-dom';

export const Replys = ({
  userNameReply,
  name,
  isVerified,
  timePosted,
  text,
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
}) => {
  return (
    <div className='reply'>
      <div className='reply-content'>
        <Link to={`/${userNameReply}`} style={{ textDecoration: 'none' }}>
          <img
            src={`https://unavatar.io/${userNameReply}`}
            alt='avatar-profile-img'
            className='avatar-profile-img'
            width='50px'
            height='50px'
          />
        </Link>
        <div className='reply-details'>
          <div className='reply-username-data'>
            <Link
              to={`/${userNameReply}`}
              style={{ textDecoration: 'none', color: ' #fff' }}
            >
              <b>{name}</b>
            </Link>
            <Verified
              className={`verified-profile ${
                isVerified ? 'verified' : 'not-verified'
              }`}
            />
            <span>
              <Link
                to={`/${userNameReply}`}
                style={{ textDecoration: 'none', color: ' #dedede9f' }}
              >
                @{userNameReply}
              </Link>{' '}
              · {timePosted}
            </span>
          </div>
          <p>{text}</p>
        </div>
      </div>

      <IteractionPost
        CommentIcon={CommentIcon}
        RepeatIcon={RepeatIcon}
        LikeIcon={LikeIcon}
        ViewsIcon={ViewsIcon}
      />
    </div>
  );
};
