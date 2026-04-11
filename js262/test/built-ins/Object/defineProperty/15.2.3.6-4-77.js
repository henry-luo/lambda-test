

/*---
es5id: 15.2.3.6-4-77
description: >
    Object.defineProperty - both desc.[[Set]] and name.[[Set]] are two
    objects which refer to the same object (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

function setFunc(value) {
  obj.setVerifyHelpProp = value;
}

Object.defineProperty(obj, "foo", {
  set: setFunc
});

Object.defineProperty(obj, "foo", {
  set: setFunc
});
verifyWritable(obj, "foo", "setVerifyHelpProp");

verifyProperty(obj, "foo", {
  enumerable: false,
  configurable: false,
});
