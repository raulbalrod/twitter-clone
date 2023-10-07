import { SideBar } from '../components/menu/sideBar';
import { TredingTopicsPage } from '../components/widgets/trendingTopics/trendingPage';
import { WidgetsTwitter } from '../components/widgets/widgets';
import { trendingTopics } from '../data/widgets/trendingTopics';

export const TrendsPage = () => {
  return (
    <div className='app'>
      <SideBar />

      <div className='all-trends'>
        <h2 style={{ borderBottom: '1px solid #dedede9f' }}>Trends</h2>

        <div className='all-trending-topics'>
          {trendingTopics.map((topic) => (
            <TredingTopicsPage
              id={topic.id}
              category={topic.category}
              title={topic.title}
              posts={topic.posts}
              key={topic.id}
            />
          ))}
        </div>
      </div>

      <WidgetsTwitter />
    </div>
  );
};
