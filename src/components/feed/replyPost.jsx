export const ReplyPost = () => {
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
          placeholder='Post your reply'
        ></textarea>
        <button className='feed-new-post-btn'>Reply</button>
      </div>
    </div>
  );
};
