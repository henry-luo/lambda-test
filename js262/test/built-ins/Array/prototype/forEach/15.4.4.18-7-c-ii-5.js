

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - k values are accessed during each
    iteration and not prior to starting the loop on an Array
---*/

var result = true;
var kIndex = [];


function callbackfn(val, idx, obj) {
  
  if (typeof kIndex[idx] === "undefined") {
    
    if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
      result = false;
    }
    kIndex[idx] = 1;
  } else {
    result = false;
  }
}

[11, 12, 13, 14].forEach(callbackfn, undefined);

assert(result, 'result !== true');
