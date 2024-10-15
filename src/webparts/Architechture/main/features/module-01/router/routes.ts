import { checkModulePermission } from '../../../config/constants/checkModulesPermissions';
import CustomerCreate from '../components/container/CustomerCreate';
import CustomerListing from '../components/container/CustomerListing';
import FileUploader from '../components/presentation/fileUploader';

interface ModuleRouteConfig {
  route: string;
  module: string;
  subModule: string;
  privacyType: 'public' | 'private';
  isPermitted: (module: string, subModule: string) => boolean; // Function to check permissions
  element: any;
}

const MODULE_01_CONSTANTS = {
  MODULE: 'module-01',
  SUB_MODULES: {
    CUSTOMER_CREATE: 'customerCreate',
    CUSTOMER_LIST: 'customerList',
    FILE_UPLOADER: 'fileUploader',
  },
  ROUTES: {
    CUSTOMER_CREATE: '/create',
    CUSTOMER_LIST: '/list',
    FILE_UPLOADER: '/fileUploader',
  },
};

export const module01ModuleRoutes: ModuleRouteConfig[] = [
  {
    route: MODULE_01_CONSTANTS.ROUTES.CUSTOMER_CREATE,
    module: MODULE_01_CONSTANTS.MODULE,
    subModule: MODULE_01_CONSTANTS.SUB_MODULES.CUSTOMER_CREATE,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: CustomerCreate,
  },
  {
    route: MODULE_01_CONSTANTS.ROUTES.CUSTOMER_LIST,
    module: MODULE_01_CONSTANTS.MODULE,
    subModule: MODULE_01_CONSTANTS.SUB_MODULES.CUSTOMER_LIST,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: CustomerListing,
  },
  {
    route: MODULE_01_CONSTANTS.ROUTES.FILE_UPLOADER,
    module: MODULE_01_CONSTANTS.MODULE,
    subModule: MODULE_01_CONSTANTS.SUB_MODULES.FILE_UPLOADER,
    privacyType: 'private',
    isPermitted: (module, subModule) =>
      checkModulePermission(module, subModule),
    element: FileUploader,
  },
];
