

/*---
description: |
  %TypedArray%.prototype.set must throw a RangeError when passed a negative offset
info: bugzilla.mozilla.org/show_bug.cgi?id=1140752
esid: pending
---*/


assert.throws(RangeError, function() {
  new Uint8Array().set([], -1);
});
