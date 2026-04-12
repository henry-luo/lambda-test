

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Function Object can be used as thisArg
---*/

var result = false;
var objString = function() {};

function callbackfn(val, idx, obj) {
  result = (this === objString);
}

[11].forEach(callbackfn, objString);

assert(result, 'result !== true');
