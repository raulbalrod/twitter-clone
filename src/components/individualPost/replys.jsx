import { Verified } from '@mui/icons-material';

import './Reply.css';
import { Link, useParams } from 'react-router-dom';
import { getPostDestails } from '../../utils/post';

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
  numsComments,
  numsRetweets,
  numsLikes,
  numsViews,
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

      <ul>
        <li>
          <CommentIcon /> {numsComments}
        </li>
        <li>
          <RepeatIcon /> {numsRetweets}
        </li>
        <li>
          <LikeIcon /> {numsLikes}
        </li>
        <li>
          <ViewsIcon /> {numsViews}
        </li>
      </ul>
    </div>
  );
};
