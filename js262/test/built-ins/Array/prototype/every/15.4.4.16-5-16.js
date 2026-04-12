

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-16
description: Array.prototype.every - RegExp Object can be used as thisArg
---*/

var accessed = false;
var objRegExp = new RegExp();

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objRegExp;
}

assert([11].every(callbackfn, objRegExp), '[11].every(callbackfn, objRegExp) !== true');
assert(accessed, 'accessed !== true');
