import { hasOwnProperty, typeMold } from '@tools';
import { getEventBus } from './eventbus';

const event = getEventBus();

class Util {
  constructor(host, fromMenu) {
    this.host = host;
    this.fromMenu = fromMenu;
  }

  formatMenu(menu) {
    const typeFn = typeMold(menu);
    let format = menu;
    if (typeFn('string')) format = { name: menu };
    return Object.assign(format, {
      hasKey: this.host,
    });
  }

  openPage = menu => {
    event.$emit('@PAGE_LABEL_ON_PAGE', this.formatMenu(menu), this.fromMenu);
  };

  switchPage = menu => {
    event.$emit('@PAGE_LABEL_SWITCH', this.formatMenu(menu));
  };

  closePage = menu => {
    event.$emit('@PAGE_LABEL_REMOVE', this.formatMenu(menu));
  };

  refreshPage = menu => {
    event.$emit('@PAGE_LABEL_REFRESH', this.formatMenu(menu));
  };

  switchRefresh(open) {
    this.switchPage(open);
    setTimeout(() => this.refreshPage(open));
  }

  closeAndOpen = (close, open) => {
    this.closePage(close);
    setTimeout(() => this.openPage(open));
  };

  closeAndSwitch = (close, open) => {
    this.closePage(close);
    setTimeout(() => this.switchPage(open));
  };

  closeAndSwitchRefresh = (close, open) => {
    this.closePage(close);
    setTimeout(() => this.switchRefresh(open));
  };




  openAndRefreshPage = menu => {
    this.closePage(menu);
    setTimeout(() => this.openPage(menu));
  };

  openAndClosePage = (open, close) => {
    this.openPage(open);
    setTimeout(() => this.closePage(close));
  };

  switchAndClosePage = (open, close) => {
    this.switchPage(open);
    setTimeout(() => this.closePage(close));
  };

  closeAndOpenPage = (close, open) => {
    this.closePage(close);
    setTimeout(() => this.openPage(open));
  };

  switchAndCloseRefreshPage = (open, close) => {
    this.switchAndClosePage(open, close);
    setTimeout(() => this.refreshPage(open));
  };

  openAndClosePageRefresh = (open, close) => {
    this.closeAndOpenPage(close, open);
    setTimeout(() => this.refreshPage(open));
  };
}

const createUtil = (...arg) => new Util(...arg);

const getUtil = (() => {
  let util;
  return () => {
    if (!util) util = createUtil();
    return util;
  };
})();

export default function(Component) {
  const prototypeClone = Component.prototype;
  if (!hasOwnProperty(prototypeClone, '$util')) {
    Object.defineProperty(prototypeClone, '$util', {
      get() {
        return getUtil();
      },
      set() {
        throw new Error('util值不允许修改');
      },
    });
  }
}

export {
  getUtil,
  createUtil,
};
