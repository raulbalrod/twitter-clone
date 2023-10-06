import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { IndividualPostPage } from './pages/postPage';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/:username/status/:id' element={<IndividualPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
