

/*---
es5id: 15.2.3.6-3-83
description: >
    Object.defineProperty - 'configurable' property in 'Attributes' is
    own accessor property without a get function (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var attr = {};
Object.defineProperty(attr, "configurable", {
  set: function() {}
});

Object.defineProperty(obj, "property", attr);

verifyProperty(obj, "property", {
  configurable: false,
});
