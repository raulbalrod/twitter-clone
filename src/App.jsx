import './App.css';
import { githubUsers } from './data/users';
import { SideBar } from './components/menu/sideBar';
import { PostTwitter } from './components/post/post';

function App() {
  return (
    <>
      <SideBar />

      <div className='posts'>
        {githubUsers.map((user) => (
          <PostTwitter
            userName={user.githubName}
            name={user.name}
            key={user.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
