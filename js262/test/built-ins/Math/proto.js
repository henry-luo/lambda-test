

/*---
esid: sec-math-object
description: >
  The prototype of Math is Object.prototype
info: |
  The Math Object

  The value of the [[Prototype]] internal slot of the Math object is the
  intrinsic object %ObjectPrototype%.
---*/

var proto = Object.getPrototypeOf(Math);

assert.sameValue(proto, Object.prototype);
