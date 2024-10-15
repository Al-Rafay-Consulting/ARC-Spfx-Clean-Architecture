import { checkModulePermission } from '../../../config/constants/checkModulesPermissions';
import EmployeeRegistration from '../components/container/EmployeeRegistration';
import EmployeeView from '../components/presentation/EmployeeView';

interface ModuleRouteConfig {
  route: string;
  module: string;
  subModule: string;
  privacyType: 'public' | 'private';
  isPermitted: (module: string, subModule: string) => boolean; // Function to check permissions
  element: any;
}

const EMPLOYEE_MANAGEMENT_CONSTANTS = {
  MODULE: 'employee',
  SUB_MODULES: {
    EMPLOYEE_REGISTRATION: 'employeeRegistration',
    EMPLOYEE_LIST: 'employeeList',
  },
  ROUTES: {
    EMPLOYEE_REGISTRATION: '/registration',
    EMPLOYEE_LIST: '/list',
  },
};

export const employeeModuleRoutes: ModuleRouteConfig[] = [
  {
    route: EMPLOYEE_MANAGEMENT_CONSTANTS.ROUTES.EMPLOYEE_REGISTRATION,
    module: EMPLOYEE_MANAGEMENT_CONSTANTS.MODULE,
    subModule: EMPLOYEE_MANAGEMENT_CONSTANTS.SUB_MODULES.EMPLOYEE_REGISTRATION,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: EmployeeRegistration,
  },
  {
    route: EMPLOYEE_MANAGEMENT_CONSTANTS.ROUTES.EMPLOYEE_LIST,
    module: EMPLOYEE_MANAGEMENT_CONSTANTS.MODULE,
    subModule: EMPLOYEE_MANAGEMENT_CONSTANTS.SUB_MODULES.EMPLOYEE_LIST,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: EmployeeView,
  },
];
