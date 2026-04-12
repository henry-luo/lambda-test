

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - element to be retrieved is inherited
    data property on an Array-like object
---*/

var kValue = 'abc';
var testResult = false;

function callbackfn(val, idx, obj) {
  if (idx === 5) {
    testResult = (val === kValue);
  }
}

var proto = {
  5: kValue
};

var Con = function() {};
Con.prototype = proto;

var child = new Con();
child.length = 10;

Array.prototype.forEach.call(child, callbackfn);

assert(testResult, 'testResult !== true');
