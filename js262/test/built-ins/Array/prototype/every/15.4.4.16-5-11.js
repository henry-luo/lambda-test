

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-11
description: Array.prototype.every - String Object can be used as thisArg
---*/

var accessed = false;
var objString = new String();

function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objString;
}


assert([11].every(callbackfn, objString), '[11].every(callbackfn, objString) !== true');
assert(accessed, 'accessed !== true');
