

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach applied to the Math object
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = ('[object Math]' === Object.prototype.toString.call(obj));
}

Math.length = 1;
Math[0] = 1;
Array.prototype.forEach.call(Math, callbackfn);

assert(result, 'result !== true');
