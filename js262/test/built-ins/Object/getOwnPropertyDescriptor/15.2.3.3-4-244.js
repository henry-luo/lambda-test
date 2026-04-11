

/*---
es5id: 15.2.3.3-4-244
description: >
    Object.getOwnPropertyDescriptor - ensure that 'set' property of
    returned object is data property with correct 'writable' attribute
---*/

var obj = {};
var fun = function() {
  return "ownSetProperty";
};
Object.defineProperty(obj, "property", {
  set: fun,
  configurable: true
});

var desc = Object.getOwnPropertyDescriptor(obj, "property");

desc.set = "overwriteSetProperty";

assert.sameValue(desc.set, "overwriteSetProperty", 'desc.set');
