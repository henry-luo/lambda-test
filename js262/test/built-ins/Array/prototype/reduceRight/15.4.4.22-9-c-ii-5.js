

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - k values are accessed during each
    iteration and not prior to starting the loop on an Array
---*/

var arr = [11, 12, 13, 14];
var kIndex = [];
var result = true;
var called = 0;


function callbackfn(preVal, curVal, idx, o) {
  
  called++;
  if (typeof kIndex[idx] === "undefined") {
    
    if (idx !== arr.length - 1 && typeof kIndex[idx + 1] === "undefined") {
      result = false;
    }
    kIndex[idx] = 1;
  } else {
    result = false;
  }
}

arr.reduceRight(callbackfn, 1);

assert(result, 'result !== true');
assert.sameValue(called, 4, 'called');
