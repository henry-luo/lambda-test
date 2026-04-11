

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - 'initialValue' is returned if 'len' is 0
    and 'initialValue' is present
---*/

var accessed = false;

function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
}

assert.sameValue([].reduce(callbackfn, 3), 3, '[].reduce(callbackfn, 3)');
assert.sameValue(accessed, false, 'accessed');
