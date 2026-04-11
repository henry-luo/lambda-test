

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (subclassed Array, length overridden with []
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();

f.length = [];


var callCnt = 0;

function cb() {
  callCnt++
}
var i = f.forEach(cb);

assert.sameValue(callCnt, 0, 'callCnt');
