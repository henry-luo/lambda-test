

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-10
description: Array.prototype.every - Array Object can be used as thisArg
---*/

var accessed = false;
var objArray = [];

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objArray;
}


assert([11].every(callbackfn, objArray), '[11].every(callbackfn, objArray) !== true');
assert(accessed, 'accessed !== true');
