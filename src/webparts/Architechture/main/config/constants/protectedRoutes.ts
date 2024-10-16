import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactElement | null;
  privacyType: 'public' | 'private';
  isPermitted: (module: string, subModule?: string) => boolean;
  module: string;
  subModule?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  privacyType,
  isPermitted,
  module,
  subModule,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (
      privacyType === 'private' && subModule
        ? !isPermitted(module, subModule)
        : !isPermitted(module)
    ) {
      navigate('/not-found');
    }
  }, [pathname]);

  return children;
};
