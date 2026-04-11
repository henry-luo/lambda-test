

/*---
es5id: 15.2.3.3-4-240
description: >
    Object.getOwnPropertyDescriptor - ensure that 'get' property of
    returned object is data property with correct 'writable' attribute
---*/

var obj = {};
var fun = function() {
  return "ownGetProperty";
};
Object.defineProperty(obj, "property", {
  get: fun,
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, "property");

desc.get = "overwriteGetProperty";

assert.sameValue(desc.get, "overwriteGetProperty", 'desc.get');
