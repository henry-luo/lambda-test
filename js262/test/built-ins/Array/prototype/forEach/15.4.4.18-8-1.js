

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (empty array)
---*/

var callCnt = 0;

function cb() {
  callCnt++
}
var i = [].forEach(cb);

assert.sameValue(callCnt, 0, 'callCnt');
