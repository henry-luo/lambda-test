

/*---
es5id: 13.2-15-1
description: >
    Function Object has length as its own property and does not invoke
    the setter defined on Function.prototype.length (Step 15)
includes: [propertyHelper.js]
---*/

var fun = function (x, y) { };

verifyProperty(fun, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true,
});
