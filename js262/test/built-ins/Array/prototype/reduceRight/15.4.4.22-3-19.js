

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - value of 'length' is an object which
    has an own toString method
---*/

var testResult1 = true;
var testResult2 = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx > 1) {
    testResult1 = false;
  }

  if (idx === 1) {
    testResult2 = true;
  }
  return false;
}

var toStringAccessed = false;
var obj = {
  0: 12,
  1: 11,
  2: 9,
  length: {
    toString: function() {
      toStringAccessed = true;
      return '2';
    }
  }
};


Array.prototype.reduceRight.call(obj, callbackfn, 1);

assert(testResult1, 'testResult1 !== true');
assert(testResult2, 'testResult2 !== true');
assert(toStringAccessed, 'toStringAccessed !== true');
