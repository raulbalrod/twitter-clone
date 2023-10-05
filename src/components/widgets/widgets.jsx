import { githubUsers } from '../../data/users';
import './Widgets.css';

import { SubscriptionsTwitter } from './subscription/subscription';
import { TredingTopics } from './trendingTopics/trendingTopics';
import { WhoToFollows } from './whoToFollow/whoToFollow';

export const WidgetsTwitter = () => {
  return (
    <div className='widgets'>
      {/*Seach users */}

      <SubscriptionsTwitter />

      <div className='user-to-follow'>
        <h3 style={{ color: '#fff' }}>Who to follow</h3>
        {githubUsers.slice(0, 3).map((user) => (
          <WhoToFollows
            name={user.name}
            userName={user.githubName}
            isVerified={user.isVerified}
            key={user.id}
          />
        ))}
      </div>

      <TredingTopics />
    </div>
  );
};
