import { useParams } from 'react-router-dom';
import '../App.css';

import { SideBar } from '../components/menu/sideBar';
import { WidgetsTwitter } from '../components/widgets/widgets';
import { getPostDestails } from '../utils/post';

export const IndividualPostPage = () => {
  const { postUserName } = useParams();

  const post = getPostDestails(postUserName);
  return (
    <div className='app'>
      <SideBar />

      <WidgetsTwitter />
    </div>
  );
};
