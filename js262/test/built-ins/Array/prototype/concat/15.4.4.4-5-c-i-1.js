

/*---
esid: sec-array.prototype.concat
description: >
    Array.prototype.concat will concat an Array when index property
    (read-only) exists in Array.prototype (Step 5.c.i)
includes: [propertyHelper.js]
---*/

Object.defineProperty(Array.prototype, "0", {
  value: 100,
  writable: false,
  configurable: true
});

var newArrayFromConcat = Array.prototype.concat.call(101);

assert(
  newArrayFromConcat[0] instanceof Number,
  'The result of evaluating (newArrayFromConcat[0] instanceof Number) is expected to be true'
);
verifyProperty(newArrayFromConcat, "0", {
  writable: true,
  enumerable: true,
  configurable: true,
});
