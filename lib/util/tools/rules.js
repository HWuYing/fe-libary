"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.discount = exports.validNameRepeat = exports.toFloat = exports.minZoreToMaxOneHundred = exports.password = exports.decimal = exports.validFileLength = exports.specialMoneyInput = exports.money = exports.lettersNumberSpecialChar = exports.onlyLettersAndNo = exports.positiveInteger = exports.overZeroInteger = exports.integer = exports.url = exports.email = exports.maxLength = exports.minLength = exports.inputRequired = exports.selectRequired = exports.mobile = exports.phone = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var factoryRules = function factoryRules(_ref) {
  var pattern = _ref.pattern,
      message = _ref.message;
  return {
    validator: function validator(rule, value, callback) {
      if (!value || pattern.test(value)) {
        return callback();
      }

      callback(message);
    }
  };
};

var phone = factoryRules({
  pattern: /((^0[0-9]{2,3}-?[0-9]{6,8}$)|(^00886-?[1-9]{1,2}-?[0-9]{6,8}$))|((^1[345789]{1}[0-9]{9}$)|(^400\d{7}$)|(^00886-?9[0-9]{8}$)|(^09[0-9]{8}$))/i,
  message: '请输入正确的电话号码！'
});
exports.phone = phone;
var mobile = factoryRules({
  pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
  message: '请输入正确的手机号码！'
});
exports.mobile = mobile;
var selectRequired = {
  required: true,
  message: '此项是必选的！'
};
exports.selectRequired = selectRequired;
var inputRequired = {
  required: true,
  message: '此项是必填的！'
};
exports.inputRequired = inputRequired;

var minLength = function minLength(length) {
  return {
    min: length,
    message: "\u8F93\u5165\u957F\u5EA6\u81F3\u5C11".concat(length, "\u5B57\u7B26!")
  };
};

exports.minLength = minLength;

var maxLength = function maxLength(length) {
  return {
    max: length,
    message: "\u8F93\u5165\u957F\u5EA6\u4E0D\u5F97\u8D85\u8FC7".concat(length, "\u5B57\u7B26!")
  };
};

exports.maxLength = maxLength;
var email = {
  type: 'email',
  message: '请输入正确的邮箱！'
};
exports.email = email;
var url = {
  type: 'url',
  message: '请输入正确的网址！'
};
exports.url = url;
var integer = factoryRules({
  pattern: /^[-]?[1-9]+\d*$|^0{1}$/i,
  message: '请输入整数'
});
exports.integer = integer;
var overZeroInteger = {
  validator: function validator(rule, value, callback) {
    var rex = /^\+?[1-9]\d*$/i;

    if (rex.test(value.toString().trim())) {
      callback();
    }

    callback('请输入大于0的正整数');
  }
};
exports.overZeroInteger = overZeroInteger;
var positiveInteger = factoryRules({
  pattern: /^[0-9]*[1-9][0-9]*$/i,
  message: '请输入正整数'
});
exports.positiveInteger = positiveInteger;
var onlyLettersAndNo = {
  pattern: /^[A-Za-z0-9]+$/,
  message: '请填写数字或字母'
};
exports.onlyLettersAndNo = onlyLettersAndNo;
var lettersNumberSpecialChar = {
  pattern: /^[A-Za-z0-9-_./]+$/,
  message: '请填写数字或字母或者_-./等字符'
};
exports.lettersNumberSpecialChar = lettersNumberSpecialChar;
var money = factoryRules({
  pattern: /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/,
  message: '请输入正确的金额！'
});
exports.money = money;
var specialMoneyInput = {
  validator: function validator(rule, value, callback) {
    var specialMoney = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;

    if (specialMoney.test(value.toString().trim())) {
      callback();
    }

    callback('请输入正确的金额！');
  }
};
exports.specialMoneyInput = specialMoneyInput;

var validFileLength = function validFileLength(length) {
  return {
    validator: function validator(rule, value, callback) {
      if (typeof value === 'string' && value.split(',').length > length) {
        callback("\u4E0A\u4F20\u9644\u4EF6\u4E0D\u5F97\u8D85\u8FC7".concat(length, "\u5F20"));
      }

      callback();
    }
  };
};

exports.validFileLength = validFileLength;
var decimal = {
  validator: function validator(rule, value, callback) {
    var rex = /(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/;

    if (rex.test(value.toString().trim())) {
      callback();
    }

    callback('请输入小数点后仅两位的小数！');
  }
};
exports.decimal = decimal;
var password = {
  pattern: /^[A-Za-z0-9_@]{6,12}$/,
  message: '请填写数字或字母字符'
};
exports.password = password;
var minZoreToMaxOneHundred = {
  pattern: /(^(0|100)$)|(^[1-9]\d?$)/i,
  message: "\u8BF7\u8F93\u51650\u5230100\u5230\u6574\u6570"
};
exports.minZoreToMaxOneHundred = minZoreToMaxOneHundred;

var toFloat = function toFloat() {
  var fixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return {
    pattern: new RegExp("(^(0|([1-9]{1}\\d{0,1})){1}(\\.\\d{1,".concat(fixed, "}){0,1}$)|(^(0|100)$)"), 'i'),
    message: "\u8BF7\u8F93\u51650-100\u7684\u6570\u5B57\uFF0C\u6700\u591A\u4E24\u4F4D\u5C0F\u6570"
  };
};

exports.toFloat = toFloat;

var validNameRepeat =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(method, params, callback) {
    var response, resultMsg, resultCode;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return method(params);

          case 2:
            response = _context.sent;
            resultMsg = response.resultMsg, resultCode = response.resultCode;

            if (resultCode !== 200) {
              callback(resultMsg);
            }

            callback();

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function validNameRepeat(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validNameRepeat = validNameRepeat;
var discount = {
  pattern: /\b0(\.\d{1,2})\b/,
  message: "\u8BF7\u8F93\u51650-1\u7684\u4E4B\u95F4\u7684\u5C0F\u6570\uFF0C\u6700\u591A\u4E24\u4F4D\u5C0F\u6570"
};
exports.discount = discount;