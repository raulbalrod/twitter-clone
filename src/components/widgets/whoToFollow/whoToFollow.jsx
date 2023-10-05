import { Verified } from '@mui/icons-material';

export const WhoToFollows = ({ name, userName, isVerified }) => {
  return (
    <div className='who-to-follow'>
      <img
        src={`https://unavatar.io/${userName}`}
        alt='avatar-profile-img'
        className='avatar-profile-img'
        width='50px'
        height='50px'
      />

      <div className='follow-username-data'>
        <div>
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
  );
};
