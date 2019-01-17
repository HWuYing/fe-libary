const factoryRules = ({ pattern, message }) => ({
  validator: (rule, value, callback) => {
    if (!value || pattern.test(value)) {
      return callback();
    }
    callback(message);
  },
});

export const phone = factoryRules({
  pattern: /((^0[0-9]{2,3}-?[0-9]{6,8}$)|(^00886-?[1-9]{1,2}-?[0-9]{6,8}$))|((^1[345789]{1}[0-9]{9}$)|(^400\d{7}$)|(^00886-?9[0-9]{8}$)|(^09[0-9]{8}$))/i,
  message: '请输入正确的电话号码！',
});

export const mobile = factoryRules({
  pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
  message: '请输入正确的手机号码！',
});

export const selectRequired = {
  required: true,
  message: '此项是必选的！',
};

export const inputRequired = {
  required: true,
  message: '此项是必填的！',
};

export const minLength = length => {
  return {
    min: length,
    message: `输入长度至少${length}字符!`,
  };
};

export const maxLength = length => {
  return {
    max: length,
    message: `输入长度不得超过${length}字符!`,
  };
};

export const email = {
  type: 'email',
  message: '请输入正确的邮箱！',
};

export const url = {
  type: 'url',
  message: '请输入正确的网址！',
};

export const integer = factoryRules({
  pattern: /^[-]?[1-9]+\d*$|^0{1}$/i,
  message: '请输入整数',
});

export const overZeroInteger = {
  validator: (rule, value, callback) => {
    const rex = /^\+?[1-9]\d*$/i;
    if (rex.test(value.toString().trim())) {
      callback();
    }
    callback('请输入大于0的正整数');
  },
};

export const positiveInteger = factoryRules({
  pattern: /^[0-9]*[1-9][0-9]*$/i,
  message: '请输入正整数',
});

export const onlyLettersAndNo = {
  pattern: /^[A-Za-z0-9]+$/,
  message: '请填写数字或字母',
};

export const lettersNumberSpecialChar = {
  pattern: /^[A-Za-z0-9-_./]+$/,
  message: '请填写数字或字母或者_-./等字符',
};

export const money = factoryRules({
  pattern: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/,
  message: '请输入正确的金额！',
});

export const specialMoneyInput = {
  validator: (rule, value, callback) => {
    const specialMoney = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;
    if (specialMoney.test(value.toString().trim())) {
      callback();
    }
    callback('请输入正确的金额！');
  },
};

export const validFileLength = length => {
  return {
    validator: (rule, value, callback) => {
      if (typeof value === 'string' && value.split(',').length > length) {
        callback(`上传附件不得超过${length}张`);
      }
      callback();
    },
  };
};

export const decimal = {
  validator: (rule, value, callback) => {
    const rex = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;
    if (rex.test(value.toString().trim())) {
      callback();
    }
    callback('请输入小数点后仅两位的小数！');
  },
};

export const password = {
  pattern: /^[A-Za-z0-9_@]{6,12}$/,
  message: '请填写数字或字母字符',
};

export const minZoreToMaxOneHundred = factoryRules({
  pattern: /(^(0|100)$)|(^[1-9]\d?$)/i,
  message: `请输入0到100到整数`,
});

export const toFloat = (fixed = 2) => ({
  pattern: new RegExp(`(^(0|([1-9]{1}\\d{0,1})){1}(\\.\\d{1,${fixed}}){0,1}$)|(^(0|100)$)`, 'i'),
  message: `请输入0-100的数字，最多两位小数`,
});

export const validNameRepeat = async (method, params, callback) => {
  const response = await method(params);
  const { resultMsg, resultCode } = response;
  if (resultCode !== 200) {
    callback(resultMsg);
  }
  callback();
};

export const discount = {
  pattern: /\b0(\.\d{1,2})\b/,
  message: `请输入0-1的之间的小数，最多两位小数`,
};
