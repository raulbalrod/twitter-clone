import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { IndividualPostPage } from './pages/postPage';
import { ConnectPeople } from './pages/connectPeople';
import { TrendsPage } from './pages/trends';
import { ProfilePage } from './pages/profile';
import { LoginPage } from './pages/loginPage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route
          path='/:usernamePost/status/:id'
          element={<IndividualPostPage />}
        />
        <Route path='/:usernamePost' element={<ProfilePage />} />
        <Route path='/connect_people' element={<ConnectPeople />} />
        <Route path='/trends' element={<TrendsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
