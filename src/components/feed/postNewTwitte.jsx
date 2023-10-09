export const NewPostTwitter = () => {
  return (
    <div className='new-post'>
      <div>
        <img
          src='https://unavatar.io/raulbalrod'
          alt='img-profile'
          width='50px'
        />
        <textarea
          name='post'
          className='textarea-new-post'
          placeholder='What is happening?!'
        ></textarea>
      </div>

      <div>
        <input type='file' />

        <button className='feed-new-post-btn'>Post</button>
      </div>
    </div>
  );
};
