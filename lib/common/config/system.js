"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PAGE_EDIT_TYPE = exports.MENU_TYPE = exports.PROJECT_CONFIG = void 0;
var PROJECT_CONFIG = {
  ERP: {
    value: 1,
    label: '平台管理系统',
    platform: 'ADMIN_SYSTEM'
  },
  ENTERPRISE: {
    value: 2,
    label: '装企管理系统',
    platform: 'DECOR_SYSTEM'
  },
  STORE: {
    value: 3,
    label: '运营商管理系统',
    platform: 'STORE_SYSTEM'
  }
};
exports.PROJECT_CONFIG = PROJECT_CONFIG;

var MENU_TYPE = function MENU_TYPE(platform) {
  return Object.keys(PROJECT_CONFIG).reduce(function (menuType, key) {
    var project = PROJECT_CONFIG[key];
    if (project.platform === platform) return project.value;
    return menuType;
  }, '');
};

exports.MENU_TYPE = MENU_TYPE;
var PAGE_EDIT_TYPE = {
  EDIT: {
    label: '修改',
    value: '1'
  },
  SEE: {
    label: '查看',
    value: '2'
  },
  ADD: {
    label: '添加',
    value: '3'
  },
  AUDIT: {
    label: '审核',
    value: '4'
  }
};
exports.PAGE_EDIT_TYPE = PAGE_EDIT_TYPE;