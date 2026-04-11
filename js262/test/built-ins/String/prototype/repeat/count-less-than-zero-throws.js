

/*---
es6id: 21.1.3.13
description: >
  Throws a RangeError if count < 0
info: |
  21.1.3.13 String.prototype.repeat ( count )

  6. If n < 0, throw a RangeError exception.
---*/

assert.throws(RangeError, function() {
  ''.repeat(-1);
});

assert.throws(RangeError, function() {
  ''.repeat(-Infinity);
});
