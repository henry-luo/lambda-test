

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - thisArg is object from object template
---*/

var res = false;

function callbackfn(val, idx, obj)
{
  return this.res;
}

function foo() {}
var f = new foo();
f.res = true;
var arr = [1];

assert.sameValue(arr.some(callbackfn, f), true, 'arr.some(callbackfn,f)');
