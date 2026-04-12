

/*---
esid: sec-date.prototype.toisostring
description: >
    Date.prototype.toISOString - TypeError is thrown when this is any
    primitive values
---*/


assert.throws(TypeError, function() {
  Date.prototype.toISOString.call(15);
});
