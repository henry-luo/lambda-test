

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight applied to String object, which
    implements its own property get method
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (curVal === "1");
  }
}

var str = new String("012");
Array.prototype.reduceRight.call(str, callbackfn, "initialValue");

assert(testResult, 'testResult !== true');
