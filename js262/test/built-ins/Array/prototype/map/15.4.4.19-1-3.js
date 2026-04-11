

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - applied to boolean primitive
---*/

function callbackfn(val, idx, obj) {
  return obj instanceof Boolean;
}

Boolean.prototype[0] = true;
Boolean.prototype.length = 1;

var testResult = Array.prototype.map.call(false, callbackfn);

assert.sameValue(testResult[0], true, 'testResult[0]');
