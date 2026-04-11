

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to String object
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = obj instanceof String;
}

var obj = new String("abc");
Array.prototype.forEach.call(obj, callbackfn);

assert(result, 'result !== true');
