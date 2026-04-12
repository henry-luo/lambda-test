

/*---
esid: sec-array.prototype.foreach
es5id: 15.4.4.18-4-12
description: Array.prototype.forEach - 'callbackfn' is a function
---*/

var accessed = false;

function callbackfn(val, idx, obj) {
  accessed = true;
}

[11, 9].forEach(callbackfn);

assert(accessed, 'accessed !== true');
