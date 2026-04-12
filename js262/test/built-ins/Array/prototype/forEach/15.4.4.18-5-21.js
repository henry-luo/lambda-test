

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - the global object can be used as thisArg
---*/

var global = this;
var result = false;

function callbackfn(val, idx, obj) {
  result = (this === global);
}

[11].forEach(callbackfn, this);

assert(result, 'result !== true');
