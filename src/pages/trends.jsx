import { SideBar } from '../components/menu/sideBar';
import { WidgetsTwitter } from '../components/widgets/widgets';

export const TrendsPage = () => {
  return (
    <div className='app'>
      <SideBar />

      <h1>Trends</h1>

      <WidgetsTwitter />
    </div>
  );
};
