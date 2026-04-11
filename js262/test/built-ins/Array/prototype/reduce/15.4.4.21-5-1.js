

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce throws TypeError if 'length' is 0 (empty
    array), no initVal
---*/

function cb() {}
assert.throws(TypeError, function() {
  [].reduce(cb);
});
