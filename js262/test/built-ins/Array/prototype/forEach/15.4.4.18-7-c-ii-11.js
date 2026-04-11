

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn is called with 2 formal
    parameter
---*/

var result = false;

function callbackfn(val, idx) {
  result = (val > 10 && arguments[2][idx] === val);
}

[11].forEach(callbackfn);

assert(result, 'result !== true');
