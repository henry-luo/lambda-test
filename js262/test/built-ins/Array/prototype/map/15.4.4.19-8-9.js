

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - modifications to length don't change number
    of iterations on an Array
---*/

var called = 0;

function callbackfn(val, idx, obj) {
  called += 1;
  return val > 10;
}

var arr = [9, , 12];

Object.defineProperty(arr, "1", {
  get: function() {
    arr.length = 2;
    return 8;
  },
  configurable: true
});

var testResult = arr.map(callbackfn);

assert.sameValue(testResult.length, 3, 'testResult.length');
assert.sameValue(called, 2, 'called');
assert.sameValue(typeof testResult[2], "undefined", 'typeof testResult[2]');
