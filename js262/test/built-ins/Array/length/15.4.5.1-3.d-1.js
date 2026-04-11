

/*---
esid: sec-properties-of-array-instances-length
es5id: 15.4.5.1-3.d-1
description: >
    Throw RangeError if attempt to set array length property to
    4294967296 (2**32)
---*/


assert.throws(RangeError, function() {
  [].length = 4294967296;
}, '[].length = 4294967296 throws a RangeError exception');
