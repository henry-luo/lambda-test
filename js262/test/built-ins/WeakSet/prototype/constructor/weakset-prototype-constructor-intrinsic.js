

/*---
esid: sec-weakset.prototype.constructor
description: >
  The initial value of WeakSet.prototype.constructor is the %WeakSet%
  intrinsic object.
---*/

assert.sameValue(
  WeakSet.prototype.constructor,
  WeakSet,
  'The value of WeakSet.prototype.constructor is "WeakSet"'
);
