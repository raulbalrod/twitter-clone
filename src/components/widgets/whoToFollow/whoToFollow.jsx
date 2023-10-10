import { Verified } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { BtnFollow } from './followBtn';

export const WhoToFollows = ({ name, userName, isVerified }) => {
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

      <BtnFollow />
    </div>
  );
};
