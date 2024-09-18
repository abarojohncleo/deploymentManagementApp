/* React */
import React, {lazy, Suspense} from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import {Login, Logout} from "./components/index";
import SidebarLayout from './components/global/SideBarLayout';
import Home from "./pages/Home";
import Roster from "./pages/Roster";
import BusinessPartners from './pages/BusinessPartners';
import Engineers from './pages/Engineers';
import EngineerRequests from './pages/EngineerRequests';
import Quotations from './pages/Quotations';
import Projects from './pages/Projects';
import PrivateRoutes from './components/PrivateRoutes';

const routes = createBrowserRouter(createRoutesFromElements(

<Route>
  <Route element={<PrivateRoutes />} > 
    <Route element={<SidebarLayout />} >
      <Route path="/home" element={<Home/>}/>
      <Route path="/roster" element={<Roster/>}/>
      <Route path="/business-partners" element={<BusinessPartners/>}/>
      <Route path="/engineers" element={<Engineers/>}/>
      <Route path="/engineer-requests" element={<EngineerRequests/>}/>
      <Route path="/quotations" element={<Quotations/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Route>
  </Route>
  <Route >
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
  </Route>
</Route> 
))

export default routes;