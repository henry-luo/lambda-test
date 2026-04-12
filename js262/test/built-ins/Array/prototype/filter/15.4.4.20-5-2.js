

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - thisArg is Object
---*/

var res = false;
var o = new Object();
o.res = true;

function callbackfn(val, idx, obj)
{
  return this.res;
}

var srcArr = [1];
var resArr = srcArr.filter(callbackfn, o);

assert.sameValue(resArr.length, 1, 'resArr.length');
