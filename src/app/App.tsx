import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';
import { NotFound } from '../pages/notFound';
import { Layout } from '../widgets/layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route element={<MainPage />} path='/' />
          <Route element={<NotFound />} path='*' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
