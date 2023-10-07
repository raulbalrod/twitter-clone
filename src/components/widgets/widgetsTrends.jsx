import { Link } from 'react-router-dom';
import { newUsers } from '../../data/widgets/newUsers';
import './Widgets.css';

import { SubscriptionsTwitter } from './subscription/subscription';
import { WhoToFollows } from './whoToFollow/whoToFollow';

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export const WidgetsTwitterTrendings = () => {
  const randomUsers = [];

  while (randomUsers.length < 5) {
    const randomIndex = getRandomIndex(newUsers);
    const randomUser = newUsers[randomIndex];

    if (!randomUsers.includes(randomUser)) {
      randomUsers.push(randomUser);
    }
  }

  return (
    <div className='widgets'>
      {/* Seach users */}

      <SubscriptionsTwitter />

      <div className='user-to-follow'>
        <h3 style={{ color: '#fff' }}>Who to follow</h3>
        {randomUsers.map((user) => (
          <WhoToFollows
            name={user.name}
            userName={user.username}
            isVerified={user.isVerified}
            key={user.id}
          />
        ))}

        <Link
          className='show-more'
          to='/connect_people'
          style={{ textDecoration: 'none' }}
        >
          <span>Show more</span>
        </Link>
      </div>
    </div>
  );
};
