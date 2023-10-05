import { Button } from '@mui/material';
import './Widgets.css';

import { SubscriptionsTwitter } from './subscription/subscription';
import { TredingTopics } from './trendingTopics/trendingTopics';
import { WhoToFollows } from './whoToFollow/whoToFollow';

export const WidgetsTwitter = () => {
  return (
    <div className='widgets'>
      <div className='subscription-premium'>
        <h3>Suscribe to Premium</h3>
        <span>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </span>
        <Button className='subscribe-premium-btn'>Subscribe</Button>
      </div>

      <SubscriptionsTwitter />

      <WhoToFollows />

      <TredingTopics />
    </div>
  );
};
