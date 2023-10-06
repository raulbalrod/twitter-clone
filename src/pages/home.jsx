import { SideBar } from '../components/menu/sideBar';
import { FeedTwitter } from '../components/feed/feed';
import { WidgetsTwitter } from '../components/widgets/widgets';

export const HomePage = () => {
  return (
    <div className='app'>
      <SideBar />

      <FeedTwitter />

      <WidgetsTwitter />
    </div>
  );
};
