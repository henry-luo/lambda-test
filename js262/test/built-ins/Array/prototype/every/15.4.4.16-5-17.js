

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-17
description: Array.prototype.every - the JSON object can be used as thisArg
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === JSON;
}

assert([11].every(callbackfn, JSON), '[11].every(callbackfn, JSON) !== true');
assert(accessed, 'accessed !== true');
