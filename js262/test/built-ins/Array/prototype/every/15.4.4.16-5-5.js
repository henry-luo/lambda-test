

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - thisArg is object from object template
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

assert.sameValue(arr.every(callbackfn, f), true, 'arr.every(callbackfn,f)');
