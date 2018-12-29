export const hasOwnProperty = (o, name) => Object.prototype.hasOwnProperty.call(o, name);

export const getPrefix = (() => {
  let prefix = null;
  return () => {
    if (typeof window === 'undefined') return {};
    if (!prefix) {
      const styles = window.getComputedStyle(document.documentElement, '');
      const pre = (Array.prototype.slice
          .call(styles)
          .join('')
          .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1];
      const dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
      prefix = {
        dom: dom,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre[0].toUpperCase() + pre.substr(1)
      };
    }
    return prefix;
  }
})();

export const getClientInfo = ((dom) => {
  if (typeof window === 'undefined') return () => ({});
  return (dom) => {
    let obj = {};
    if (dom && dom.getBoundingClientRect) {
      obj = dom.getBoundingClientRect();
    }
    return obj;
  };
})();
