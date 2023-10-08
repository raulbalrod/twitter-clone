import CheckIcon from '@mui/icons-material/Check';

import { Verified } from '@mui/icons-material';

export const PPStyles = () => {
  return (
    <div className='change-styles'>
      <h1>Customize your view</h1>
      <span className='customize-span'>
        This is the settings for account X in this browser.
      </span>

      <div className='fake-post'>
        <div className='fake-post-data'>
          <img
            src={`https://unavatar.io/Twitter `}
            alt='avatar-profile-img'
            width='50px'
          />
          <div className='post-username-data'>
            <b>Twitter </b>
            <Verified className={`verified-profile ${'verified'}`} />
            <span> @Twitter · 42m</span>
          </div>
        </div>

        <p>
          At the heart of X are short messages called posts - just like this one
          - which can include photos, videos, links, text, hashtags, and
          mentions.
        </p>
      </div>

      <div className='settings'>
        <span>Color</span>
        <div className='color-section'>
          <div className='blue'>
            <CheckIcon />
          </div>
        </div>

        <span>Background</span>
        <div className='styles-section'>
          <div className='dim'>Dim</div>
        </div>
      </div>
    </div>
  );
};
