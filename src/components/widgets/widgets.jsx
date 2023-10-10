import { Link } from 'react-router-dom';
import { newUsers } from '../../data/widgets/newUsers';
import { trendingTopics } from '../../data/widgets/trendingTopics';
import './Widgets.css';

import { SubscriptionsTwitter } from './subscription/subscription';
import { TredingTopics } from './trendingTopics/trendingTopics';
import { WhoToFollows } from './whoToFollow/whoToFollow';

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

export const WidgetsTwitter = () => {
  const randomUsers = [];

  while (randomUsers.length < 3) {
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
        <h3>Who to follow</h3>
        {randomUsers.map((user) => (
          <WhoToFollows
            name={user.name}
            userName={user.username}
            isVerified={user.isVerified}
            initialIsFollowing={user.isFollowing}
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

      <div className='trending-topics'>
        <h3>Trending Topics</h3>
        {trendingTopics.slice(0, 5).map((topic) => (
          <TredingTopics
            id={topic.id}
            category={topic.category}
            title={topic.title}
            posts={topic.posts}
            key={topic.id}
          />
        ))}

        <Link
          className='show-more'
          to='/trends'
          style={{ textDecoration: 'none' }}
        >
          <span>Show more</span>
        </Link>
      </div>
    </div>
  );
};
