

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every - k values are accessed during each
    iteration and not prior to starting the loop on an Array
---*/

var called = 0;
var kIndex = [];


function callbackfn(val, idx, obj) {
  called++;
  
  if (typeof kIndex[idx] === "undefined") {
    
    if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
      return false;
    }
    kIndex[idx] = 1;
    return true;
  } else {
    return false;
  }
}

assert([11, 12, 13, 14].every(callbackfn, undefined), '[11, 12, 13, 14].every(callbackfn, undefined) !== true');
assert.sameValue(called, 4, 'called');
