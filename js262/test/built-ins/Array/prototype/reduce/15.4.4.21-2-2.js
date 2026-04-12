

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - 'length' is own data property on an Array
---*/

function callbackfn(prevVal, curVal, idx, obj) {
  return (obj.length === 2);
}

assert.sameValue([12, 11].reduce(callbackfn, 1), true, '[12, 11].reduce(callbackfn, 1)');
