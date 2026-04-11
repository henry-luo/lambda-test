

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - k values are accessed during each
    iteration and not prior to starting the loop on an Array
---*/

var result = true;
var kIndex = [];
var called = 0;


function callbackfn(prevVal, curVal, idx, obj) {
  
  called++;
  if (typeof kIndex[idx] === "undefined") {
    
    if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
      result = false;
    }
    kIndex[idx] = 1;
  } else {
    result = false;
  }
}

[11, 12, 13, 14].reduce(callbackfn, 1);

assert(result, 'result !== true');
assert.sameValue(called, 4, 'called');
