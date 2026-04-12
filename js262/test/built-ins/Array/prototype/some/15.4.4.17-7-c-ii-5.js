

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - k values are accessed during each iteration
    and not prior to starting the loop
---*/

var kIndex = [];


function callbackfn(val, idx, obj) {
  
  if (typeof kIndex[idx] === "undefined") {
    
    if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
      return true;
    }
    kIndex[idx] = 1;
    return false;
  } else {
    return true;
  }
}

assert.sameValue([11, 12, 13, 14].some(callbackfn, undefined), false, '[11, 12, 13, 14].some(callbackfn, undefined)');
