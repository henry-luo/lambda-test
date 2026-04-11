

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - thisArg is function
---*/

var res = false;

function callbackfn(val, idx, obj)
{
  return this.res;
}

function foo() {}
foo.res = true;
var arr = [1];

assert.sameValue(arr.some(callbackfn, foo), true, 'arr.some(callbackfn,foo)');
