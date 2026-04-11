

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - value of year is Infinity
    Date.prototype.toISOString throw the RangeError
---*/

var date = new Date(Infinity, 1, 70, 0, 0, 0);
assert.throws(RangeError, function() {
  date.toISOString();
});
