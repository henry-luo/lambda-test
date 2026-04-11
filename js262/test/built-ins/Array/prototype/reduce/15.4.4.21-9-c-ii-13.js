

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce - callbackfn is called with 4 formal
    parameter
---*/

var result = false;

function callbackfn(prevVal, curVal, idx, obj) {
  result = (prevVal === 1 && obj[idx] === curVal);
}

[11].reduce(callbackfn, 1);

assert(result, 'result !== true');
