

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - 'length' is own data property on an Array
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (obj.length === 2);
}

[12, 11].forEach(callbackfn);

assert(result, 'result !== true');
