import './ProfilePage.css';

import { useParams } from 'react-router-dom';

import { SideBar } from '../components/menu/sideBar';
import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';

export const ProfilePage = () => {
  const { usernamePost } = useParams();
  const post = getPostDestails(usernamePost);

  return (
    <div className='app'>
      <SideBar />

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
            <button className='follow-btn'>Follow</button>
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
