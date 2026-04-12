

/*---
es5id: 15.2.3.7-5-b-69
description: >
    Object.defineProperties - 'configurable' property of 'descObj' is
    own accessor property without a get function (8.10.5 step 4.a)
includes: [propertyHelper.js]
---*/

var obj = {};

var descObj = {};
Object.defineProperty(descObj, "configurable", {
  set: function() {}
});

Object.defineProperties(obj, {
  prop: descObj
});

verifyProperty(obj, "prop", {
  configurable: false,
});
