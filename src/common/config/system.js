export const PROJECT_CONFIG = {
  ERP: { value: 1, label: '平台管理系统', platform: 'ADMIN_SYSTEM' },
  ENTERPRISE: { value: 2, label: '装企管理系统', platform: 'DECOR_SYSTEM' },
  STORE: { value: 3, label: '运营商管理系统', platform: 'STORE_SYSTEM' },
};

export const MENU_TYPE = platform =>
  Object.keys(PROJECT_CONFIG).reduce((menuType, key) => {
    const project = PROJECT_CONFIG[key];
    if (project.platform === platform) return project.value;
    return menuType;
  }, '');

export const PAGE_EDIT_TYPE = {
  EDIT: { label: '修改', value: '1' },
  SEE: { label: '查看', value: '2' },
  ADD: { label: '添加', value: '3' },
  AUDIT: { label: '审核', value: '4' },
};
