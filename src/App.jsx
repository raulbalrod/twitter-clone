import './App.css';

import { SideBar } from './components/menu/sideBar';

import { FeedTwitter } from './components/feed/feed';
import { WidgetsTwitter } from './components/widgets/widgets';

function App() {
  return (
    <div className='app'>
      <SideBar />

      <FeedTwitter />

      <WidgetsTwitter />
    </div>
  );
}

export default App;
