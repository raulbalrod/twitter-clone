import { Verified } from '@mui/icons-material';

import './Reply.css';

export const Replys = ({
  userName,
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
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avatar-profile-img'
          className='avatar-profile-img'
          width='50px'
          height='50px'
        />
        <div className='reply-details'>
          <div className='reply-username-data'>
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
