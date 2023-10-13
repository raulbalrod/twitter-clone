import { Verified } from '@mui/icons-material';

import './Post.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const PostTwitter = ({
  userName,
  id,
  name,
  isVerified,
  text,
  mediaPost,
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
  numsComments,
  numsRetweets,
  numsLikes,
  numsViews,
}) => {
  const [isLike, setIsLike] = useState(false);

  const likeClassName = isLike ? 'tw-like-button is-liking' : 'tw-like-button';

  const handleclickLike = () => {
    setIsLike(!isLike);
  };

  const [isReposted, setIsReposted] = useState(false);

  const repostedClassName = isReposted
    ? 'tw-repost-button is-reposting'
    : 'tw-repost-button';

  const handleclickReposted = () => {
    setIsReposted(!isReposted);
  };

  const [isComment, setIsComment] = useState(false);

  const commentClassName = isComment
    ? 'tw-comment-button is-commenting'
    : 'tw-comment-button';

  const handleclickComment = () => {
    setIsComment(!isComment);
  };

  return (
    <div className='post'>
      <Link
        to={`/${userName}/status/${id}`}
        style={{ textDecoration: 'none', color: '#fff' }}
      >
        <div className='post-content'>
          <div>
            <div className='post-details'>
              <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
                <img
                  src={`https://unavatar.io/${userName}`}
                  alt='avatar-profile-img'
                  className='avatar-profile-img'
                  width='50px'
                  height='50px'
                />
              </Link>

              <div className='post-username-data'>
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
                <span>
                  <Link
                    to={`/${userName}`}
                    style={{ textDecoration: 'none', color: ' #dedede9f' }}
                  >
                    @{userName}
                  </Link>
                </span>
              </div>
            </div>

            <p className='text-post'>{text}</p>
          </div>

          <img src={mediaPost} className='post-img' alt='' />
        </div>
      </Link>

      <ul>
        <li className={commentClassName} onClick={handleclickComment}>
          <div className='comment-svg-icon'>
            <CommentIcon />
          </div>
          {numsComments}
        </li>
        <li className={repostedClassName} onClick={handleclickReposted}>
          <div className='reply-svg-icon'>
            <RepeatIcon />
          </div>
          {numsRetweets}
        </li>
        <li className={likeClassName} onClick={handleclickLike}>
          <div className='like-svg-icon'>
            <LikeIcon />
          </div>
          {numsLikes}
        </li>
        <li>
          <div className='comment-svg-icon'>
            <ViewsIcon />
          </div>
          {numsViews}
        </li>
      </ul>
    </div>
  );
};
