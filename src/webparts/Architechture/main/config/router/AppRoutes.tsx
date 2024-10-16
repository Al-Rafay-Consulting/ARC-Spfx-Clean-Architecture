import * as React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../../shared/components/Navbar/Navbar';
import NotFound from '../../shared/components/NotFound';
import { appRoutes } from './routes';
import { ProtectedRoute } from '../constants/protectedRoutes';

function AppRoutes() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        {appRoutes?.map(
          ({
            route,
            module,
            isParent,
            privacyType,
            isPermitted,
            element: Element,
          }) => (
            <Route
              key={route}
              path={`${route}${isParent ? '/*' : ''}`}
              element={
                <ProtectedRoute
                  privacyType={privacyType}
                  isPermitted={isPermitted}
                  module={module}>
                  <Element />
                </ProtectedRoute>
              }
            />
          )
        )}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRoutes;
