import { Link } from 'react-router-dom';
import './WhoConnect.css';

import { Verified } from '@mui/icons-material';

export const WhoToFollowsPage = ({
  name,
  userName,
  isVerified,
  description,
}) => {
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

        <button className='follow-btn'>Follow</button>
      </div>

      <p>{description}</p>
    </div>
  );
};
