

/*---
description: >
    Functions declared as methods are assigned a `name` property according to
    the string value of their property name.
es6id: 14.3.8
includes: [propertyHelper.js]
features: [Symbol]
---*/

var m = Symbol('method');
var method = { [m]() {} }[m];

verifyProperty(method, 'name', {
  value: '[method]',
  writable: false,
  enumerable: false,
  configurable: true,
});
