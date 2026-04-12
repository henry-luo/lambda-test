

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - string primitive can be used as thisArg
---*/

var result = false;

function callbackfn(val, idx, obj) {
  result = (this.valueOf() === "abc");
}

[11].forEach(callbackfn, "abc");

assert(result, 'result !== true');
