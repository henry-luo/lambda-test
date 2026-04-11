

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight - element to be retrieved is inherited
    accessor property on an Array-like object
---*/

var testResult = false;

function callbackfn(prevVal, curVal, idx, obj) {
  if (idx === 1) {
    testResult = (prevVal === 2);
  }
}

var proto = {
  0: 0,
  1: 1
};

Object.defineProperty(proto, "2", {
  get: function() {
    return 2;
  },
  configurable: true
});

var Con = function() {};
Con.prototype = proto;

var child = new Con();
child.length = 3;

Array.prototype.reduceRight.call(child, callbackfn);

assert(testResult, 'testResult !== true');
