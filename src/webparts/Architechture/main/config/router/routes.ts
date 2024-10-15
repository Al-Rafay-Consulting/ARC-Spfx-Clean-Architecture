import CaseManagement from '../../features/case-management';
import EmployeeManagement from '../../features/employee';
import CustomerManagement from '../../features/module-01';
import LandingPage from '../../shared/components/LandingPage';
import { checkModulePermission } from '../constants/checkModulesPermissions';

interface appRouteConfig {
  route: string;
  module: string;
  privacyType: 'public' | 'private';
  isPermitted: (module: string) => boolean; // Function to check permissions
  isParent: boolean; // For top-level routes
  element: any;
}

export const APP_CONSTANTS = {
  MODULES: {
    HOME: 'home',
    CASE_MANAGEMENT: 'caseManagement',
    MODULE_01: 'module-01',
    EMPLOYEE: 'employee',
  },
  ROUTES: {
    HOME: '/',
    CASE_MANAGEMENT: '/case-management',
    MODULE_01: '/module-01',
    EMPLOYEE: '/employee',
  },
};

export const appRoutes: appRouteConfig[] = [
  {
    route: APP_CONSTANTS.ROUTES.HOME,
    module: APP_CONSTANTS.MODULES.HOME,
    privacyType: 'public',
    isPermitted: (module) => checkModulePermission(module), // Custom logic for permissions
    isParent: false,
    element: LandingPage,
  },
  {
    route: APP_CONSTANTS.ROUTES.CASE_MANAGEMENT,
    module: APP_CONSTANTS.MODULES.CASE_MANAGEMENT,
    privacyType: 'private',
    isPermitted: (module) => checkModulePermission(module), // Custom logic for permissions
    isParent: false,
    element: CaseManagement,
  },
  {
    route: APP_CONSTANTS.ROUTES.MODULE_01,
    module: APP_CONSTANTS.MODULES.MODULE_01,
    privacyType: 'private',
    isPermitted: (module) => checkModulePermission(module), // Custom logic for permissions
    isParent: true,
    element: CustomerManagement,
  },
  {
    route: APP_CONSTANTS.ROUTES.EMPLOYEE,
    module: APP_CONSTANTS.MODULES.EMPLOYEE,
    privacyType: 'public',
    isPermitted: (module) => checkModulePermission(module),
    isParent: true,
    element: EmployeeManagement,
  },
];
