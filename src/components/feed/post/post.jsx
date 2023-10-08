import { Verified } from '@mui/icons-material';

import './Post.css';
import { Link } from 'react-router-dom';

export const PostTwitter = ({
  userName,
  name,
  isVerified,
  timePosted,
  text,
  mediaPost,
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
    <div className='post'>
      <div className='post-content'>
        <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
          <img
            src={`https://unavatar.io/${userName}`}
            alt='avatar-profile-img'
            className='avatar-profile-img'
            width='50px'
            height='50px'
          />
        </Link>
        <div className='post-details'>
          <div className='post-username-data'>
            <Link
              to={`/${userName}`}
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
                to={`/${userName}`}
                style={{ textDecoration: 'none', color: ' #dedede9f' }}
              >
                @{userName}
              </Link>{' '}
              · {timePosted}
            </span>
          </div>
          <p>{text}</p>

          <img src={mediaPost} className='post-img' alt='' />
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
