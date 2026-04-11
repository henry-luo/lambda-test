

/*---
description: >
  values compare correctly.
includes: [deepEqual.js]
---*/

assert.deepEqual({ a: { x: 1 }, b: [true] }, { a: { x: 1 }, b: [true] });

assert.throws(Test262Error, function () { assert.deepEqual({}, { a: { x: 1 }, b: [true] }); });
assert.throws(Test262Error, function () { assert.deepEqual({ a: { x: 1 }, b: [true] }, { a: { x: 1 }, b: [false] }); });
