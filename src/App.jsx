import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
