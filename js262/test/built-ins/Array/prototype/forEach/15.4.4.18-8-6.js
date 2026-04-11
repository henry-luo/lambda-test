

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf)
---*/

foo.prototype = new Array(1, 2, 3);

function foo() {}
var f = new foo();

var o = {
  valueOf: function() {
    return 0;
  }
};
f.length = o;

var callCnt = 0;

function cb() {
  callCnt++
}
var i = f.forEach(cb);

assert.sameValue(callCnt, 0, 'callCnt');
