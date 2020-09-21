(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/SmartComponents/CreateImageWizard/CreateImageWizard.js":
/*!********************************************************************!*\
  !*** ./src/SmartComponents/CreateImageWizard/CreateImageWizard.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux */ "./src/SmartComponents/redux/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-icons */ "./node_modules/@patternfly/react-icons/dist/esm/index.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../api.js */ "./src/api.js");










function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var ReleaseComponent = function ReleaseComponent(props) {
  var options = [{
    value: 'rhel-8',
    label: 'Red Hat Enterprise Linux (RHEL) 8.2'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    isHorizontal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    label: "Release",
    fieldId: "release-select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelect"], {
    value: props.value,
    onChange: function onChange(value) {
      return props.setRelease(value);
    },
    "aria-label": "Select release input",
    id: "release-select"
  }, options.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelectOption"], {
      key: option.value,
      value: option.value,
      label: option.label
    });
  }))));
};

ReleaseComponent.propTypes = {
  setRelease: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};

var AmazonUploadComponent = function AmazonUploadComponent(props) {
  var serviceOptions = [{
    value: 'ec2',
    label: 'Amazon Elastic Compute Cloud (ec2)'
  }, {
    value: 's3',
    label: 'Amazon Simple Storage Service (s3)'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Access key ID",
    fieldId: "amazon-access-id",
    helperTextInvalid: props.errors['amazon-access-id'] && props.errors['amazon-access-id'].value || '',
    validated: props.errors['amazon-access-id'] && 'error' || 'default'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    value: props.upload.options.access_key_id || '',
    type: "text",
    "aria-label": "amazon access key ID",
    id: "amazon-access-id",
    onChange: function onChange(value) {
      return props.setUploadOptions(Object.assign(props.upload.options, {
        access_key_id: value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Secret access key",
    fieldId: "amazon-access-secret",
    helperTextInvalid: props.errors['amazon-access-secret'] && props.errors['amazon-access-secret'].value || '',
    validated: props.errors['amazon-access-secret'] && 'error' || 'default'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    value: props.upload.options.secret_access_key || '',
    type: "password",
    "aria-label": "amazon secret access key",
    id: "amazon-access-secret",
    onChange: function onChange(value) {
      return props.setUploadOptions(Object.assign(props.upload.options, {
        secret_access_key: value
      }));
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Service",
    fieldId: "amazon-service"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelect"], {
    value: props.upload.options.service,
    "aria-label": "Select amazon service",
    id: "amazon-service",
    onChange: function onChange(value) {
      return props.setUploadOptions(Object.assign(props.upload.options, {
        service: value
      }));
    }
  }, serviceOptions.map(function (option) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelectOption"], {
      key: option.value,
      value: option.value,
      label: option.label
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Region",
    fieldId: "amazon-region",
    helperTextInvalid: props.errors['amazon-region'] && props.errors['amazon-region'].value || '',
    validated: props.errors['amazon-region'] && 'error' || 'default'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    value: props.upload.options.region,
    type: "text",
    "aria-label": "amazon region",
    id: "amazon-region",
    onChange: function onChange(value) {
      return props.setUploadOptions(Object.assign(props.upload.options, {
        region: value
      }));
    }
  })), props.upload.options.service === 's3' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Bucket",
    fieldId: "amazon-bucket",
    helperTextInvalid: props.errors['amazon-bucket'] && props.errors['amazon-bucket'].value || '',
    validated: props.errors['amazon-bucket'] && 'error' || 'default'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    value: props.upload.options.bucket || '',
    type: "text",
    "aria-label": "amazon bucket",
    id: "amazon-bucket",
    onChange: function onChange(value) {
      return props.setUploadOptions(Object.assign(props.upload.options, {
        bucket: value
      }));
    }
  })));
};

AmazonUploadComponent.propTypes = {
  setUploadOptions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  upload: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

var UploadComponent = function UploadComponent(props) {
  var uploadTypes = [{
    value: 'aws',
    label: 'Amazon Machine Image (.vhdx)'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Form"], {
    isHorizontal: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Destination",
    fieldId: "upload-destination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelect"], {
    value: props.upload.type || '',
    id: "upload-destination",
    onChange: function onChange(value) {
      return props.setUpload({
        type: value,
        options: null
      });
    },
    "aria-label": "Select upload destination"
  }, uploadTypes.map(function (type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormSelectOption"], {
      key: type.value,
      value: type.value,
      label: type.label
    });
  }))), props.upload.type === 'aws' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AmazonUploadComponent, {
    upload: props.upload,
    setUploadOptions: props.setUploadOptions,
    errors: props.errors
  })));
};

UploadComponent.propTypes = {
  setUpload: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  setUploadOptions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  upload: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

var SubscriptionComponent = function SubscriptionComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Register the system",
    fieldId: "subscribe-radio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Radio"], {
    name: "subscribe-radio",
    isChecked: props.subscribeNow,
    id: "subscribe-radio",
    label: "Embed an activation key and register systems on first boot",
    onChange: function onChange() {
      return props.setSubscribeNow(true);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Radio"], {
    name: "subscribe-radio",
    isChecked: !props.subscribeNow,
    label: "Register the system later",
    id: "subscribe-radio",
    onChange: function onChange() {
      return props.setSubscribeNow(false);
    }
  })), props.subscribeNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    label: "Organization ID",
    fieldId: "subscription-organization"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    isDisabled: true,
    value: props.subscription.organization || '',
    type: "text",
    id: "subscription-organization",
    "aria-label": "Subscription organization ID"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FormGroup"], {
    isRequired: true,
    label: "Activation key",
    fieldId: "subscription-activation",
    helperTextInvalid: props.errors['subscription-activation'] && props.errors['subscription-activation'].value || '',
    validated: props.errors['subscription-activation'] && 'error' || 'default'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextInput"], {
    value: props.subscription['activation-key'] || '',
    type: "password",
    id: "subscription-activation",
    "aria-label": "Subscription activation key",
    onChange: function onChange(value) {
      return props.setSubscription(Object.assign(props.subscription, {
        'activation-key': value
      }));
    }
  }))));
};

SubscriptionComponent.propTypes = {
  setSubscription: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  setSubscribeNow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  subscription: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  subscribeNow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

var ReviewComponent = function ReviewComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, (Object.keys(props.uploadErrors).length > 0 || Object.keys(props.subscriptionErrors).length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Alert"], {
    variant: "danger",
    isInline: true,
    title: "Required information is missing"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["TextContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", null, "Create image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", null, "Review the information and click Create image to create the image using the following criteria."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Release"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Flex"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-1']
    }]
  }, "Release"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
    }]
  }, props.release)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Image output"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Flex"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-1']
    }]
  }, "Destination"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
    }]
  }, props.upload && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, props.upload.type))), Object.entries(props.uploadErrors).map(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_ref, 2),
        key = _ref2[0],
        error = _ref2[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Flex"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
      breakpointMods: [{
        modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-1']
      }]
    }, error.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
      breakpointMods: [{
        modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_15__["ExclamationCircleIcon"], {
      className: "error"
    }), " ", error.value));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", null, "Registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Flex"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-1']
    }]
  }, "Subscription"), !props.subscribeNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
    }]
  }, "Register the system later"), props.subscribeNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
    breakpointMods: [{
      modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
    }]
  }, "Register the system on first boot")), Object.entries(props.subscriptionErrors).map(function (_ref3) {
    var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_ref3, 2),
        key = _ref4[0],
        error = _ref4[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Flex"], {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
      breakpointMods: [{
        modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-1']
      }]
    }, error.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexItem"], {
      breakpointMods: [{
        modifier: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["FlexModifiers"]['flex-2']
      }]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_icons__WEBPACK_IMPORTED_MODULE_15__["ExclamationCircleIcon"], {
      className: "error"
    }), " ", error.value));
  })));
};

ReviewComponent.propTypes = {
  release: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  upload: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  subscription: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  subscribeNow: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  uploadErrors: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  subscriptionErrors: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};

var CreateImageWizard = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(CreateImageWizard, _Component);

  var _super = _createSuper(CreateImageWizard);

  function CreateImageWizard(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CreateImageWizard);

    _this = _super.call(this, props);
    _this.setRelease = _this.setRelease.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUpload = _this.setUpload.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setUploadOptions = _this.setUploadOptions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setSubscription = _this.setSubscription.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.setSubscribeNow = _this.setSubscribeNow.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onStep = _this.onStep.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onSave = _this.onSave.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.onClose = _this.onClose.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.validate = _this.validate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.validateUploadAmazon = _this.validateUploadAmazon.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.validateSubscription = _this.validateSubscription.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));
    _this.state = {
      release: 'rhel-8',
      upload: {
        type: 'aws',
        options: {
          service: 'ec2',
          region: 'eu-west-2',
          access_key_id: null,
          secret_access_key: null,
          bucket: null
        }
      },
      subscription: {
        organization: null,
        'activation-key': null,
        'server-url': 'subscription.rhsm.redhat.com',
        'base-url': 'http:cdn.redhat.com/',
        insights: true
      },
      subscribeNow: false,

      /* errors take form of $fieldId: error */
      uploadErrors: {},
      subscriptionErrors: {}
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CreateImageWizard, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var user;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return insights.chrome.auth.getUser();

              case 2:
                user = _context.sent;
                this.setState({
                  subscription: {
                    organization: Number(user.identity.internal.org_id)
                  }
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "onStep",
    value: function onStep(step) {
      if (step.name === 'Review') {
        this.validate();
      }
    }
  }, {
    key: "validate",
    value: function validate() {
      /* upload */
      if (this.state.upload.type === 'aws') {
        this.validateUploadAmazon();
      } else {
        this.setState({
          uploadErrors: {}
        });
      }
      /* subscription */


      if (this.state.subscribeNow) {
        this.validateSubscription();
      } else {
        this.setState({
          subscriptionErrors: {}
        });
      }
    }
  }, {
    key: "validateUploadAmazon",
    value: function validateUploadAmazon() {
      var uploadErrors = {};

      if (!this.state.upload.options.access_key_id) {
        uploadErrors['amazon-access-id'] = {
          label: 'Access key ID',
          value: 'A value is required'
        };
      }

      if (!this.state.upload.options.secret_access_key) {
        uploadErrors['amazon-access-secret'] = {
          label: 'Secret access key',
          value: 'A value is required'
        };
      }

      if (!this.state.upload.options.region) {
        uploadErrors['amazon-region'] = {
          label: 'Region',
          value: 'A value is required'
        };
      }

      if (this.state.upload.options.service === 's3' && !this.state.upload.options.bucket) {
        uploadErrors['amazon-bucket'] = {
          label: 'Bucket',
          value: 'A value is required'
        };
      }

      this.setState({
        uploadErrors: uploadErrors
      });
    }
  }, {
    key: "validateSubscription",
    value: function validateSubscription() {
      var subscriptionErrors = {};

      if (!this.state.subscription['activation-key']) {
        subscriptionErrors['subscription-activation'] = {
          label: 'Activation key',
          value: 'A value is required'
        };
      }

      this.setState({
        subscriptionErrors: subscriptionErrors
      });
    }
  }, {
    key: "setRelease",
    value: function setRelease(release) {
      this.setState({
        release: release
      });
    }
  }, {
    key: "setUpload",
    value: function setUpload(upload) {
      this.setState({
        upload: upload
      });
    }
  }, {
    key: "setUploadOptions",
    value: function setUploadOptions(uploadOptions) {
      this.setState(function (oldState) {
        return {
          upload: {
            type: oldState.upload.type,
            options: uploadOptions
          }
        };
      });
    }
  }, {
    key: "setSubscribeNow",
    value: function setSubscribeNow(subscribeNow) {
      this.setState({
        subscribeNow: subscribeNow
      });
    }
  }, {
    key: "setSubscription",
    value: function setSubscription(subscription) {
      this.setState({
        subscription: subscription
      }, this.validate);
    }
  }, {
    key: "onSave",
    value: function onSave() {
      var _this2 = this;

      var request = {
        distribution: this.state.release,
        image_requests: [{
          architecture: 'x86_64',
          image_type: 'qcow2',
          upload_requests: [{
            type: 'aws',
            options: {
              region: this.state.upload.options.region,
              s3: {
                access_key_id: this.state.upload.options.access_key_id,
                secret_access_key: this.state.upload.options.secret_access_key,
                bucket: this.state.upload.options.bucket
              },
              ec2: {
                access_key_id: this.state.upload.options.access_key_id,
                secret_access_key: this.state.upload.options.secret_access_key
              }
            }
          }]
        }],
        customizations: {
          subscription: this.state.subscription
        }
      };
      var updateCompose = this.props.updateCompose;
      _api_js__WEBPACK_IMPORTED_MODULE_16__["default"].composeImage(request).then(function (response) {
        var compose = {};
        compose[response.id] = {
          status: 'request sent',
          distribution: request.distribution,
          architecture: request.image_requests[0].architecture,
          image_type: request.image_requests[0].image_type
        };
        updateCompose(compose);

        _this2.props.history.push('/landing');
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.props.history.push('/landing');
    }
  }, {
    key: "render",
    value: function render() {
      var steps = [{
        name: 'Release',
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ReleaseComponent, {
          value: this.state.release,
          setRelease: this.setRelease
        })
      }, {
        name: 'Target environment',
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(UploadComponent, {
          upload: this.state.upload,
          setUpload: this.setUpload,
          setUploadOptions: this.setUploadOptions,
          errors: this.state.uploadErrors
        })
      }, {
        name: 'Registration',
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(SubscriptionComponent, {
          subscription: this.state.subscription,
          subscribeNow: this.state.subscribeNow,
          setSubscription: this.setSubscription,
          setSubscribeNow: this.setSubscribeNow,
          errors: this.state.subscriptionErrors
        })
      }, {
        name: 'Review',
        component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(ReviewComponent, {
          release: this.state.release,
          upload: this.state.upload,
          subscription: this.state.subscription,
          subscribeNow: this.state.subscribeNow,
          uploadErrors: this.state.uploadErrors,
          subscriptionErrors: this.state.subscriptionErrors
        }),
        nextButtonText: 'Create'
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "pf-c-page__main-section"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Title"], {
        size: "2xl"
      }, "Create a new image")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Wizard"], {
        onNext: this.onStep,
        onGoToStep: this.onStep,
        isInPage: true,
        steps: steps,
        onClose: this.onClose,
        onSave: this.onSave
      }));
    }
  }]);

  return CreateImageWizard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

function mapDispatchToProps(dispatch) {
  return {
    updateCompose: function updateCompose(compose) {
      return dispatch(_redux__WEBPACK_IMPORTED_MODULE_13__["actions"].updateCompose(compose));
    }
  };
}

CreateImageWizard.propTypes = {
  updateCompose: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(null, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(CreateImageWizard)));

/***/ })

}]);
//# sourceMappingURL=2.js.map