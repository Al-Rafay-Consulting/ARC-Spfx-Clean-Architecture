import { checkModulePermission } from '../../../config/constants/checkModulesPermissions';
import CaseManagementLanding from '../components/container/CaseManagementLanding';

interface ModuleRouteConfig {
  route: string;
  module: string;
  subModule: string;
  privacyType: 'public' | 'private';
  isPermitted: (module: string, subModule: string) => boolean; // Function to check permissions
  element: any;
}

const CASE_MANAGEMENT_CONSTANTS = {
  MODULE: 'caseManagement',
  SUB_MODULES: {
    CASE_MANAGEMENT: 'caseManagement',
  },
  ROUTES: {
    CASE_MANAGEMENT: '/',
  },
};

export const caseManagementModuleRoutes: ModuleRouteConfig[] = [
  {
    route: CASE_MANAGEMENT_CONSTANTS.ROUTES.CASE_MANAGEMENT,
    module: CASE_MANAGEMENT_CONSTANTS.MODULE,
    subModule: CASE_MANAGEMENT_CONSTANTS.SUB_MODULES.CASE_MANAGEMENT,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: CaseManagementLanding,
  },
];
