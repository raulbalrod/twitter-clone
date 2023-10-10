import { useState } from 'react';

export const BtnFollow = ({ initialIsFollowing }) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? 'Following' : 'Follow';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleclick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <button className={buttonClassName} onClick={handleclick}>
      <p className='tw-followCard-text'>{text}</p>
      <p className='tw-followCard-stopFollow'>Unfollow</p>
    </button>
  );
};
