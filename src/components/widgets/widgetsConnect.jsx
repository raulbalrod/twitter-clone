import './Widgets.css';

import { Link } from 'react-router-dom';
import { trendingTopics } from '../../data/widgets/trendingTopics';

import { TredingTopics } from './trendingTopics/trendingTopics';

export const WidgetConnect = () => {
  return (
    <div className='widgets'>
      {/* Seach users */}

      <div className='trending-topics'>
        <h3 style={{ color: '#fff' }}>Trending Topics</h3>
        {trendingTopics.slice(0, 10).map((topic) => (
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
