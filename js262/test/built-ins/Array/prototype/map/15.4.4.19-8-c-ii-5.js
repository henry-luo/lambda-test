

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - k values are accessed during each iteration
    and not prior to starting the loop.
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

var testResult = [11, 12, 13, 14].map(callbackfn);

assert.sameValue(testResult.length, 4, 'testResult.length');
assert.sameValue(testResult[0], false, 'testResult[0]');
assert.sameValue(testResult[1], false, 'testResult[1]');
assert.sameValue(testResult[2], false, 'testResult[2]');
assert.sameValue(testResult[3], false, 'testResult[3]');
