

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to string primitive
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = obj instanceof String;
}

Array.prototype.forEach.call("abc", callbackfn);

assert(result, 'result !== true');
