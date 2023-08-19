import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import CompanyDetail from '../pages/CompanyDetail/index';
import Process from '../pages/Process/index';
import Waste from '../pages/Waste/index';
import WasteCompanySelect from '../pages/WasteCompanySelect/index';
import WasteDescription from '../pages/WasteDescription/index';

function Paths() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={'/'} element={<Navigate to={'/waste'} />} />
        <Route path={'/waste'} element={<Waste />} />
        <Route path={'/waste/:name'} element={<WasteDescription />} />
        <Route path={'/company'} element={<WasteCompanySelect />} />
        <Route path={'/company/:id'} element={<CompanyDetail />} />
        <Route path={'/process/:id'} element={<Process />} />
        <Route path={'*'} element={<Navigate to={'/waste'} />} />
      </Route>
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
