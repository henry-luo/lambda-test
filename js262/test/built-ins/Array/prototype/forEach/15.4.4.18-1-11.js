

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to Date object
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = obj instanceof Date;
}

var obj = new Date(0);
obj.length = 1;
obj[0] = 1;

Array.prototype.forEach.call(obj, callbackfn);

assert(result, 'result !== true');
