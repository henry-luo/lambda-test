

/*---
es5id: 15.2.3.6-3-76
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    an inherited data property (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var proto = {
  configurable: false
};

var ConstructFun = function() {};
ConstructFun.prototype = proto;

var child = new ConstructFun();

Object.defineProperty(obj, "property", child);

verifyProperty(obj, "property", {
  value: undefined,
  configurable: false,
});
