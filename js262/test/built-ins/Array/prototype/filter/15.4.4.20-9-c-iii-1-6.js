

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - values of 'to' are accessed during each
    iteration when 'selected' is converted to true and not prior to
    starting the loop
---*/

var toIndex = [];
var called = 0;


function callbackfn(val, idx, obj) {
  called++;
  
  if (toIndex[idx] === undefined) {
    
    if (idx !== 0 && toIndex[idx - 1] === undefined) {
      return false;
    }
    toIndex[idx] = 1;
    return true;
  } else {
    return false;
  }
}
var newArr = [11, 12, 13, 14].filter(callbackfn, undefined);

assert.sameValue(newArr.length, 4, 'newArr.length');
assert.sameValue(called, 4, 'called');
