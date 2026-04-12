

/*---
description: >
    Generator functions declared as methods are assigned a `name` property
    according to the string value of their property name.
es6id: 14.4.13
includes: [propertyHelper.js]
features: [Symbol, generators]
---*/

var m = Symbol('method');
var method = { *[m]() {} }[m];

verifyProperty(method, 'name', {
  value: '[method]',
  writable: false,
  enumerable: false,
  configurable: true,
});
