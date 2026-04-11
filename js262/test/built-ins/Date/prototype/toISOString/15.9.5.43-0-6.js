

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - TypeError is thrown when this is any
    other objects instead of Date object
---*/


assert.throws(TypeError, function() {
  Date.prototype.toISOString.call([]);
});
