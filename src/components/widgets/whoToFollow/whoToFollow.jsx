import { Verified } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const WhoToFollows = ({ name, userName, isVerified }) => {
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
    <div className='who-to-follow'>
      <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avatar-profile-img'
          className='avatar-profile-img'
          width='50px'
          height='50px'
        />
      </Link>

      <div className='follow-username-data'>
        <div>
          <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
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
          <span> @{userName}</span>
        </Link>
      </div>

      <button className={buttonClassName} onClick={handleclick}>
        <p className='tw-followCard-text'>{text}</p>
        <p className='tw-followCard-stopFollow'>Unfollow</p>
      </button>
    </div>
  );
};
