

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - the Math object can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this === Math);
}

[11].forEach(callbackfn, Math);

assert(result, 'result !== true');
