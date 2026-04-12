

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - deleting property of prototype causes
    prototype index property not to be visited on an Array-like Object
---*/

var accessed = false;
var testResult = true;

function callbackfn(val, idx, obj) {
  accessed = true;
  if (idx === 3) {
    testResult = false;
  }
}

var obj = {
  2: 2,
  length: 20
};

Object.defineProperty(obj, "0", {
  get: function() {
    delete Object.prototype[1];
    return 0;
  },
  configurable: true
});

Object.prototype[1] = 1;
Array.prototype.forEach.call(obj, callbackfn);

assert(testResult, 'testResult !== true');
assert(accessed, 'accessed !== true');
