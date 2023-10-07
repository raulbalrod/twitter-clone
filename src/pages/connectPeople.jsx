import { SideBar } from '../components/menu/sideBar';
import { WhoToFollowsPage } from '../components/widgets/whoToFollow/whoToFollowPage';
import { WidgetConnect } from '../components/widgets/widgetsConnect';
import { newUsers } from '../data/widgets/newUsers';

export const ConnectPeople = () => {
  return (
    <div className='app'>
      <SideBar />

      <div className='new-users'>
        <h2 style={{ borderBottom: '1px solid #dedede9f' }}>Connect</h2>

        {newUsers.map((user) => (
          <WhoToFollowsPage
            name={user.name}
            userName={user.username}
            description={user.description}
            isVerified={user.isVerified}
            key={user.id}
          />
        ))}
      </div>

      <WidgetConnect />
    </div>
  );
};
