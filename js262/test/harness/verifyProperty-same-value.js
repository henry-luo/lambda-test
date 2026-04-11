

/*---
description: >
  verifyProperty uses SameValue for value comparison.
includes: [propertyHelper.js]
---*/

var obj = {
  a: NaN,
  b: -0,
};

assert(verifyProperty(obj, 'a', { value: NaN }));
assert(verifyProperty(obj, 'b', { value: -0 }));

assert.throws(Test262Error, function() {
  verifyProperty(obj, 'b', { value: 0 });
});
