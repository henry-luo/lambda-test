

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - built-in functions can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this === eval);
}

[11].forEach(callbackfn, eval);

assert(result, 'result !== true');
