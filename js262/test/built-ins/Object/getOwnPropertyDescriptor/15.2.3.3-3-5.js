

/*---
es5id: 15.2.3.3-3-5
description: Object.getOwnPropertyDescriptor - 'P' is own accessor property
---*/

var obj = {};
var fun = function() {
  return "ownAccessorProperty";
};
Object.defineProperty(obj, "property", {
  get: fun,
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, "property");

assert.sameValue(desc.get, fun, 'desc.get');
