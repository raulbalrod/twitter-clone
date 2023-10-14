import { Link } from 'react-router-dom';
import './WhoConnect.css';

import { Verified } from '@mui/icons-material';
import { useEffect, useState } from 'react';

export const WhoToFollowsPage = ({
  name,
  userName,
  isVerified,
  description,
}) => {
  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`follow_${userName}`) === 'true'
  );
  const text = isFollowing ? 'Following' : 'Follow';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleclick = () => {
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    localStorage.setItem(`follow_${userName}`, isFollowing);
  }, [isFollowing, userName]);

  return (
    <div className='who-connect-page'>
      <div className='who-connect-details-users'>
        <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
          <img
            src={`https://unavatar.io/${userName}`}
            alt='avatar-profile-img'
            className='avatar-profile-img'
            width='50px'
            height='50px'
          />
        </Link>

        <div>
          <div className='verified-who-connect' style={{ paddingLeft: '0' }}>
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
          </div>
          <Link
            to={`/${userName}`}
            style={{ textDecoration: 'none', color: ' #dedede9f' }}
          >
            <span>@{userName}</span>
          </Link>
        </div>

        <button className={buttonClassName} onClick={handleclick}>
          <p className='tw-followCard-text'>{text}</p>
          <p className='tw-followCard-stopFollow'>Unfollow</p>
        </button>
      </div>

      <p>{description}</p>
    </div>
  );
};
