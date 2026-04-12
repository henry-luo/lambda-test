

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Number Object can be used as thisArg
---*/

var result = false;
var objNumber = new Number();

function callbackfn(val, idx, obj) {
  result = (this === objNumber);
}

[11].forEach(callbackfn, objNumber);

assert(result, 'result !== true');
