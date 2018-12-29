"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hasOwnProperty = function hasOwnProperty(o, key) {
  return Object.prototype.hasOwnProperty.call(o, key);
};

var ExampleMap =
/*#__PURE__*/
function () {
  function ExampleMap() {
    _classCallCheck(this, ExampleMap);

    this.exampleMap = {};
  }

  _createClass(ExampleMap, [{
    key: "addExample",
    value: function addExample(example) {
      var exampleMap = this.exampleMap;
      var key = example.hash;
      if (hasOwnProperty(exampleMap, key)) return console.log(new Error("".concat(key, " exampleMap is existence")));
      Object.assign(exampleMap, _defineProperty({}, key, example));
    }
  }, {
    key: "removeExample",
    value: function removeExample(example) {
      var exampleMap = this.exampleMap,
          hash = this.hash;
      var key = example.hash;

      if (hasOwnProperty(exampleMap, key)) {
        delete exampleMap[hash];
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var exampleMap = this.exampleMap;
      Object.keys(exampleMap).forEach(function (key) {
        var example = exampleMap[key];
        ctx.save();
        if (example.draw) example.draw();
        ctx.restore();
      });
    }
  }]);

  return ExampleMap;
}();

var _default = ExampleMap;
exports.default = _default;