import { Button } from '@mui/material';

export const NewPostTwitter = () => {
  return (
    <div className='new-post'>
      <div>
        <img
          src='https://unavatar.io/raulbalrod'
          alt='img-profile'
          width='50px'
        />
        <input type='text' placeholder='What is happening?!' />
      </div>

      <div>
        <input type='file' />

        <Button className='feed-new-post-btn'>Post</Button>
      </div>
    </div>
  );
};
