

/*---
esid: sec-array.prototype.foreach
description: Array.prototype.forEach - subclassed array when length is reduced
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();
f.length = 1;

var callCnt = 0;

function cb() {
  callCnt++
}
var i = f.forEach(cb);

assert.sameValue(callCnt, 1, 'callCnt');
