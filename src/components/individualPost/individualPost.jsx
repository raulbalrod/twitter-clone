import { Verified } from '@mui/icons-material';
import { IteractionPost } from '../iteractionPost';

export const IndividualPost = ({
  userName,
  name,
  isVerified,
  datePosted,
  views,
  text,
  mediaPost,
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
}) => {
  return (
    <div className='individual-post'>
      <div className='individual-post-content'>
        <img
          src={`https://unavatar.io/${userName}`}
          alt='avatar-profile-img'
          className='avatar-profile-img'
          width='50px'
          height='50px'
        />

        <div className='individual-post-details'>
          <div className='individual-post-username-data'>
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
        </div>
      </div>
      <div className='content-indivual-post'>
        <p>{text}</p>

        <img src={mediaPost} className='individual-post-img' alt='' />
        <div className='details-post-publication'>
          <p>
            1:02 PM · Oct 7, 2023 {/* Date of public */} · <b>1,354{views}</b>{' '}
            Views{' '}
          </p>
        </div>
      </div>

      <IteractionPost
        CommentIcon={CommentIcon}
        RepeatIcon={RepeatIcon}
        LikeIcon={LikeIcon}
        ViewsIcon={ViewsIcon}
      />
    </div>
  );
};
