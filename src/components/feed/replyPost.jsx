export const ReplyPost = () => {
  return (
    <div className='new-post'>
      <div>
        <img
          src='https://unavatar.io/raulbalrod'
          alt='img-profile'
          width='50px'
        />
        <input type='text' placeholder='Post your reply' />
        <button className='feed-new-post-btn'>Reply</button>
      </div>
    </div>
  );
};
