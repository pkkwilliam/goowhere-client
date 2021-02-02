"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApplicationPhoneNumberTextFieldView;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Dropdown = require("react-bootstrap/esm/Dropdown");

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _applicationTextField = require("../applicationTextField");

var _applicationTextField2 = _interopRequireDefault(_applicationTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationPhoneNumberTextFieldView(props) {
  return _react2.default.createElement(
    "tr",
    null,
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(CountryCodeDropDown, props)
    ),
    _react2.default.createElement(
      "td",
      null,
      _react2.default.createElement(PhoneNumberTextField, props)
    )
  );
}

function generateDropDownList(list) {
  return list.map(function (item) {
    return _react2.default.createElement(
      _Dropdown2.default.Item,
      {
        eventKey: item.name
      },
      item.chineseName + " +" + item.code
    );
  });
}

function CountryCodeDropDown(_ref) {
  var countryCodeList = _ref.countryCodeList,
      countrySelected = _ref.countrySelected,
      onChangeCountryCode = _ref.onChangeCountryCode;

  return _react2.default.createElement(
    _Dropdown2.default,
    { onSelect: function onSelect(countryCode) {
        return onChangeCountryCode(countryCode);
      } },
    _react2.default.createElement(
      _Dropdown2.default.Toggle,
      {
        id: "dropdown-custom-components",
        variant: "",
        style: { padding: 0 }
      },
      "+" + countrySelected.code
    ),
    _react2.default.createElement(
      _Dropdown2.default.Menu,
      null,
      generateDropDownList(countryCodeList)
    )
  );
}

function PhoneNumberTextField(_ref2) {
  var onChangeSmsNumber = _ref2.onChangeSmsNumber;

  return _react2.default.createElement(_applicationTextField2.default, {
    onChange: function onChange(number) {
      return onChangeSmsNumber(number.target.value);
    },
    placeholder: "手機號"
  });
}