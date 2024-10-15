import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../../config/constants/protectedRoutes';
import NotFound from '../../shared/components/NotFound';
import { module01ModuleRoutes } from './router/routes';

export default class EmployeeManagement extends React.Component {
  public render() {
    return (
      <Routes>
        {module01ModuleRoutes?.map(
          ({
            route,
            module,
            subModule,
            privacyType,
            isPermitted,
            element: Element,
          }) => (
            <Route
              key={route}
              path={route}
              element={
                <ProtectedRoute
                  privacyType={privacyType}
                  isPermitted={isPermitted}
                  subModule={subModule}
                  module={module}>
                  <Element />
                </ProtectedRoute>
              }
            />
          )
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
