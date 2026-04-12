

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - unhandled exceptions happened in callbackfn
    terminate iteration
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  if (idx > 0) {
    accessed = true;
  }
  if (idx === 0) {
    throw new Error("Exception occurred in callbackfn");
  }
  return false;
}

var obj = {
  0: 9,
  1: 100,
  10: 11,
  length: 20
};
assert.throws(Error, function() {
  Array.prototype.some.call(obj, callbackfn);
});
assert.sameValue(accessed, false, 'accessed');
