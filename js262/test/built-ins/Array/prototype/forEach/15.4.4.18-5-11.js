

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - String Object can be used as thisArg
---*/

var result = false;
var objString = new String();

function callbackfn(val, idx, obj) {
  result = (this === objString);
}

[11].forEach(callbackfn, objString);

assert(result, 'result !== true');
