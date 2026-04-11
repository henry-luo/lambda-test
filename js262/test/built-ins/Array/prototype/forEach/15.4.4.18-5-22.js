

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - boolean primitive can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this.valueOf() === false);
}

[11].forEach(callbackfn, false);

assert(result, 'result !== true');
