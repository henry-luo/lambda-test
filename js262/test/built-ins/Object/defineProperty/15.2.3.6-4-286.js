

/*---
es5id: 15.2.3.6-4-286
description: >
    Object.defineProperty - 'O' is an Array, 'name' is generic own
    accessor property of 'O', and 'desc' is accessor descriptor, test
    TypeError is thrown when updating the [[Set]] attribute value of
    'name' (15.4.5.1 step 5)
includes: [propertyHelper.js]
---*/


var arrObj = [];

function setFunc(value) {
  arrObj.setVerifyHelpProp = value;
}
Object.defineProperty(arrObj, "property", {
  set: setFunc
});
try {
  Object.defineProperty(arrObj, "property", {
    set: function() {}
  });
  throw new Test262Error("Expected an exception.");
} catch (e) {
  verifyWritable(arrObj, "property", "setVerifyHelpProp");

  if (!(e instanceof TypeError)) {
    throw new Test262Error("Expected TypeError, got " + e);
  }
}

verifyProperty(arrObj, "property", {
  enumerable: false,
  configurable: false,
});
