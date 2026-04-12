

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - return value of callbackfn is the global
    object
---*/

var global = this;
var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return global;
}

assert([11].every(callbackfn), '[11].every(callbackfn) !== true');
assert(accessed, 'accessed !== true');
