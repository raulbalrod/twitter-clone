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

        <button className='feed-new-post-btn'>Post</button>
      </div>
    </div>
  );
};
