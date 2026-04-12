

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - Boolean Object can be used as thisArg
---*/

var result = false;
var objBoolean = new Boolean();

function callbackfn(val, idx, obj) {
  result = (this === objBoolean);
}

[11].forEach(callbackfn, objBoolean);

assert(result, 'result !== true');
