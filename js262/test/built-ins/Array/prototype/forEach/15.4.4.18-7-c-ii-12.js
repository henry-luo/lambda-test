

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn is called with 3 formal
    parameter
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (val > 10 && obj[idx] === val);
}

[11].forEach(callbackfn);

assert(result, 'result !== true');
