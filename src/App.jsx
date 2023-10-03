import './App.css';
import { githubUsers } from './components/data/users';
import { PostTwitter } from './components/post/post';

function App() {
  return (
    <>
      <div>
        {githubUsers.map((user) => (
          <PostTwitter userName={user} />
        ))}
      </div>
    </>
  );
}

export default App;
