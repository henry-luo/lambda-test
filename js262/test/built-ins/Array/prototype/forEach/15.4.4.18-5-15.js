

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Date Object can be used as thisArg
---*/

var result = false;
var objDate = new Date(0);

function callbackfn(val, idx, obj) {
  result = (this === objDate);
}

[11].forEach(callbackfn, objDate);

assert(result, 'result !== true');
