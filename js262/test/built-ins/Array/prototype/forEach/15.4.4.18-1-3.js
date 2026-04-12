

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to boolean primitive
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = obj instanceof Boolean;
}

Boolean.prototype[0] = true;
Boolean.prototype.length = 1;

Array.prototype.forEach.call(false, callbackfn);

assert(result, 'result !== true');
