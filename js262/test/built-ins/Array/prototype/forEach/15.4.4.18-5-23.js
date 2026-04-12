

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - number primitive can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this.valueOf() === 101);
}

[11].forEach(callbackfn, 101);

assert(result, 'result !== true');
