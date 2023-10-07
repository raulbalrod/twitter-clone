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
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avatar-profile-img'
          className='avatar-profile-img'
          width='50px'
          height='50px'
        />

        <div>
          <div className='verified-who-connect' style={{ paddingLeft: '0' }}>
            <b>{name}</b>
            <Verified
              className={`verified-profile ${
                isVerified ? 'verified' : 'not-verified'
              }`}
            />
          </div>
          <span>@{userName}</span>
        </div>

        <button className='follow-btn'>Follow</button>
      </div>

      <p>{description}</p>
    </div>
  );
};
