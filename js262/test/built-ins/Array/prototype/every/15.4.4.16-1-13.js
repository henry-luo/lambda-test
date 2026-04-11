

/*---
esid: sec-array.prototype.every
description: Array.prototype.every applied to the JSON object
---*/

function callbackfn(val, idx, obj) {
  return ('[object JSON]' !== Object.prototype.toString.call(obj));
}

JSON.length = 1;
JSON[0] = 1;

assert.sameValue(Array.prototype.every.call(JSON, callbackfn), false, 'Array.prototype.every.call(JSON, callbackfn)');
