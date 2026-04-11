

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - the JSON object can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this === JSON);
}

[11].forEach(callbackfn, JSON);

assert(result, 'result !== true');
