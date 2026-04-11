

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - thisArg is Object
---*/

var res = false;
var o = new Object();
o.res = true;

function callbackfn(val, idx, obj)
{
  return this.res;
}

var arr = [1];

assert.sameValue(arr.some(callbackfn, o), true, 'arr.some(callbackfn, o)');
