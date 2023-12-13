"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireWildcard(require("react"));
require("./modal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Component Modal with props closeModal and messageModal
function Modal(_ref) {
  let {
    closeModal,
    messageModal
  } = _ref;
  return (
    /*#__PURE__*/
    //Modal section
    _react.default.createElement("section", {
      className: "modal"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal__content"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "modal__content__message"
    }, messageModal), /*#__PURE__*/_react.default.createElement("button", {
      className: "button",
      onClick: closeModal
    }, "Close")))
  );
}