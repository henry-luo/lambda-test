

/*---
es5id: 8.6.2_A8
description: >
    It should not be possible to change the [[Prototype]]  of a
    non-extensible object
---*/

var x = Object.preventExtensions({});
var y = {};
try {
  x.__proto__ = y;
} catch (err) {
  
  
}
if (Object.getPrototypeOf(x) !== Object.prototype) {
  throw new Test262Error("Prototype of non-extensible object mutated");
}
