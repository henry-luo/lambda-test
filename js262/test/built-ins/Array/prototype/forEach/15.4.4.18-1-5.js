

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to number primitive
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = obj instanceof Number;
}

Number.prototype[0] = 1;
Number.prototype.length = 1;

Array.prototype.forEach.call(2.5, callbackfn);

assert(result, 'result !== true');
