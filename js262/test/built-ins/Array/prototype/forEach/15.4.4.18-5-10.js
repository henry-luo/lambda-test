

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Array Object can be used as thisArg
---*/

var result = false;
var objArray = [];

function callbackfn(val, idx, obj) {
  result = (this === objArray);
}

[11].forEach(callbackfn, objArray);

assert(result, 'result !== true');
