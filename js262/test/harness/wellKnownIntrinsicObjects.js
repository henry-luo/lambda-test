

/*---
description: Basic tests for getWellKnownIntrinsicObject harness function
includes: [wellKnownIntrinsicObjects.js]
---*/


var intrinsicArray = getWellKnownIntrinsicObject('%Array%');
assert(Object.is(Array, intrinsicArray));

assert.throws(Test262Error, function () {
  
  getWellKnownIntrinsicObject('%AsyncFromSyncIteratorPrototype%');
});

assert.throws(Test262Error, function () {
  
  getWellKnownIntrinsicObject('%NotSoWellKnownIntrinsicObject%');
});
