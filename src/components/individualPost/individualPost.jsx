import { Verified } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const IndividualPost = ({
  userName,
  name,
  isVerified,
  views,
  text,
  mediaPost,
  CommentIcon,
  RepeatIcon,
  LikeIcon,
  ViewsIcon,
}) => {
  const [isLike, setIsLike] = useState(
    localStorage.getItem(`like_reply_2`) === 'true'
  );
  const [isReposted, setIsReposted] = useState(
    localStorage.getItem(`repost_reply_2`) === 'true'
  );
  const [isComment, setIsComment] = useState(
    localStorage.getItem(`comment_reply_2`) === 'true'
  );

  const likeClassName = isLike ? 'tw-like-button is-liking' : 'tw-like-button';
  const repostedClassName = isReposted
    ? 'tw-repost-button is-reposting'
    : 'tw-repost-button';
  const commentClassName = isComment
    ? 'tw-comment-button is-commenting'
    : 'tw-comment-button';

  useEffect(() => {
    localStorage.setItem(`like_reply_2`, isLike);
    localStorage.setItem(`repost_reply_2`, isReposted);
    localStorage.setItem(`comment_reply_2`, isComment);
  }, [isLike, isReposted, isComment]);

  const handleclickLike = () => {
    setIsLike(!isLike);
  };

  const handleclickReposted = () => {
    setIsReposted(!isReposted);
  };

  const handleclickComment = () => {
    setIsComment(!isComment);
  };

  return (
    <div className='individual-post'>
      <div className='individual-post-content'>
        <Link to={`/${userName}`} style={{ textDecoration: 'none' }}>
          <img
            src={`https://unavatar.io/${userName}`}
            alt='avatar-profile-img'
            className='avatar-profile-img'
            width='50px'
            height='50px'
          />
        </Link>

        <div className='individual-post-details'>
          <div className='individual-post-username-data'>
            <div>
              <Link
                to={`/${userName}`}
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <b>{name}</b>
              </Link>
              <Verified
                className={`verified-profile ${
                  isVerified ? 'verified' : 'not-verified'
                }`}
              />
            </div>
            <Link
              to={`/${userName}`}
              style={{ textDecoration: 'none', color: ' #dedede9f' }}
            >
              <span>@{userName}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='content-indivual-post'>
        <p>{text}</p>

        <img src={mediaPost} className='individual-post-img' alt='' />
        <div className='details-post-publication'>
          <p>
            1:02 PM · Oct 7, 2023 · <b>1,354{views}</b> Views
          </p>
        </div>
      </div>

      <ul>
        <li className={commentClassName} onClick={handleclickComment}>
          <div className='comment-svg-icon'>
            <CommentIcon />
          </div>
        </li>
        <li className={repostedClassName} onClick={handleclickReposted}>
          <div className='reply-svg-icon'>
            <RepeatIcon />
          </div>
        </li>
        <li className={likeClassName} onClick={handleclickLike}>
          <div className='like-svg-icon'>
            <LikeIcon />
          </div>
        </li>
        <li>
          <div className='comment-svg-icon'>
            <ViewsIcon />
          </div>
        </li>
      </ul>
    </div>
  );
};
