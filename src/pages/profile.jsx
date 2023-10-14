import './ProfilePage.css';

import { useParams } from 'react-router-dom';

import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';
import { SideBarNoActiveHome } from '../components/menu/sidebarNoActive';
import { useEffect, useState } from 'react';

export const ProfilePage = () => {
  const { usernamePost } = useParams();
  const post = getPostDestails(usernamePost);

  const [isFollowing, setIsFollowing] = useState(
    localStorage.getItem(`follow_${post.username}`) === 'true'
  );
  const text = isFollowing ? 'Following' : 'Follow';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleclick = () => {
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    localStorage.setItem(`follow_${post.username}`, isFollowing);
  }, [isFollowing, post.username]);

  return (
    <div className='app'>
      <SideBarNoActiveHome />

      <div className='profile-details'>
        <div className='content-profile-details'>
          <div className='img-and-followBtn'>
            <img
              src={`https://unavatar.io/${post.username}`}
              alt='avatar-profile-img'
              className='avatar-profile-img'
              width='120px'
              height='120px'
            />

            <button className={buttonClassName} onClick={handleclick}>
              <p className='tw-followCard-text'>{text}</p>
              <p className='tw-followCard-stopFollow'>Unfollow</p>
            </button>
          </div>

          <div className='data-profile-details'>
            <h3>{post.name}</h3>
            <span>@{post.username}</span>
            <p>{post.text}</p>
          </div>
        </div>

        <h4>
          <i>
            The current version of this Twitter/x clone does not have access to
            users' posts, likes, replies...
          </i>
        </h4>
      </div>

      <WidgetsTwitter />
    </div>
  );
};
