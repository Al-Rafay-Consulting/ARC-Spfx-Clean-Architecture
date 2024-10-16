export const checkModulePermission = (
  module: string,
  subModule?: string
): boolean => {
  const permittedAppModules: string[] = [
    'home',
    'module-01',
    'caseManagement',
    'employee',
  ];

  const permittedSubModules: Record<string, string[]> = {
    'module-01': ['customerCreate', 'customerList', 'fileUploader'],
    employee: ['employeeRegistration', 'employeeList'],
    caseManagement: ['caseManagement'],
  };

  return !subModule
    ? permittedAppModules.includes(module)
    : subModule
      ? permittedSubModules[module].includes(subModule)
      : false;
};
