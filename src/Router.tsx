import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './pages/Index';

function Paths() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default Router;
