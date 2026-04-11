

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - callbackfn is called with 1 formal
    parameter
---*/

var result = false;

function callbackfn(val) {
  result = (val > 10);
}

[11].forEach(callbackfn);

assert(result, 'result !== true');
