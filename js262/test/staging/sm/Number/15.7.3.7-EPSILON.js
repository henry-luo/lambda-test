

/*---
description: |
  Number.EPSILON
info: bugzilla.mozilla.org/show_bug.cgi?id=885798
esid: pending
---*/


assert.sameValue(Number.EPSILON, Math.pow(2, -52));


var descriptor = Object.getOwnPropertyDescriptor(Number, 'EPSILON');
assert.sameValue(descriptor.writable, false);
assert.sameValue(descriptor.configurable, false);
assert.sameValue(descriptor.enumerable, false);
