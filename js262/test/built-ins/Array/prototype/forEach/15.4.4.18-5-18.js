

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Error Object can be used as thisArg
---*/

var result = false;
var objError = new RangeError();

function callbackfn(val, idx, obj) {
  result = (this === objError);
}

[11].forEach(callbackfn, objError);

assert(result, 'result !== true');
