import { Component } from 'react';
import { message, notification } from 'antd';

const hasOwnProperty = (o, n) => Object.prototype.hasOwnProperty.call(o, n);
const prefix = 'error';

const codeMessageFn = mergeMessageFn({
  110101: '用户名不存在',
  110102: '用户名或密码错误',
  110103: '用户登录已过期',
  110104: '用户操作已被禁止',
  110105: '参数错误',
  110106: '数据签名校验失败',
  110201: '数据不存在或无法访问',
  110202: '数据验证错误',
  110203: '数据操作错误',
  999999: '服务器繁忙"',

  // 二期错误码
  100301: '参数强验证失败',
  100302: '依赖信息检查失败',
  100303: '目标对象不存在或者已经被删除',
  100304: '目标状态错误',
  100305: '错误的返回结果',
  100306: '数据已存在',
  100401: '用户名或者密码错误',
  100402: '获取用户会话数据失败',
  100501: '缺少操作所需的权限',
  100502: '被禁止的访问',
  100601: '用户操作失败',
  100111: '链接超时',
});

function getMessageMap(messageConfig) {
  return Object.keys(messageConfig).reduce(
    (o, key) =>
      Object.assign(o, {
        [`${prefix}${key}`]: info => {
          message.error(info || messageConfig[key]);
          return messageConfig[key];
        },
      }),
    {}
  );
}

function mergeMessageFn(messageConfig) {
  const messageFns = getMessageMap(messageConfig);
  return (key, reject, info) => {
    const prefixKey = `${prefix}${key}`;
    if (hasOwnProperty(messageFns, prefixKey)) {
      const messageInfo = messageFns[prefixKey](info);
      if (reject) reject(messageInfo);
      return false;
    }
    return true;
  };
}

class Error extends Component {
  constructor(props, context) {
    super(props, context);
    this.mapEvent = {};
  }

  componentWillMount() {
    this.mapEvent['ERROR-INTERCEPT'] = this.$eventbus.$on('ERROR-INTERCEPT', (...arg) =>
      this.errorIntercept(...arg)
    );
  }

  componentWillUnmount() {
    Object.keys(this.mapEvent).forEach(key => {
      this.mapEvent[key]();
      delete this.mapEvent[key];
    });
  }

  errorIntercept(response, resolve, reject) {
    const { resultCode, resultMsg } = response;
    const { history } = this.props;
    if (resultCode === 100402 || resultCode === 110103) {
      codeMessageFn('100402');
      return history.push('/login');
    }

    if (resultCode === 999999) {
      notification.error({
        message: `服务端错误,请刷新页面`,
        description: resultMsg,
      });
    }

    if (
      codeMessageFn(resultCode.toString(), reject, resultMsg) &&
      (resultCode === 200 || resultCode >= 504)
    ) {
      return resolve(response);
    }
  }

  render() {
    return null;
  }
}

export default Error;
