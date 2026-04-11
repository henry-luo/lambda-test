

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - RangeError is thrown when value of
    date is outside the valid range of time.
---*/


var date = new Date(8.64e15 + 1);
assert.throws(RangeError, function() {
  date.toISOString();
});
