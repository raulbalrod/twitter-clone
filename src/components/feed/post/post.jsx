import { Verified } from '@mui/icons-material';

import './Post.css';

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
}) => {
  return (
    <div className='post'>
      <div className='post-content'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avatar-profile-img'
          className='avatar-profile-img'
          width='50px'
          height='50px'
        />
        <div className='post-details'>
          <div className='post-username-data'>
            <b>{name}</b>{' '}
            <Verified
              className={`verified-profile ${
                isVerified ? 'verified' : 'not-verified'
              }`}
            />
            <span>
              @{userName} · {timePosted}
            </span>
          </div>
          <p>{text}</p>

          <img src={mediaPost} className='post-img' alt='' />
        </div>
      </div>

      <ul>
        <li>
          <CommentIcon />
        </li>
        <li>
          <RepeatIcon />
        </li>
        <li>
          <LikeIcon />
        </li>
        <li>
          <ViewsIcon />
        </li>
      </ul>
    </div>
  );
};
