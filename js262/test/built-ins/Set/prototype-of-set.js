

/*---
esid: sec-properties-of-the-set-constructor
description: >
    The value of the [[Prototype]] internal slot of the Set constructor
    is the intrinsic object %FunctionPrototype% (19.2.3).
---*/

assert.sameValue(
  Object.getPrototypeOf(Set),
  Function.prototype,
  "`Object.getPrototypeOf(Set)` returns `Function.prototype`"
);
