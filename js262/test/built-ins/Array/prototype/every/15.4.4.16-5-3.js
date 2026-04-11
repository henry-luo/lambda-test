

/*---
esid: sec-array.prototype.every
es5id: 15.4.4.16-5-3
description: Array.prototype.every - thisArg is Array
---*/

var res = false;
var a = new Array();
a.res = true;

function callbackfn(val, idx, obj)
{
  return this.res;
}

var arr = [1];

assert.sameValue(arr.every(callbackfn, a), true, 'arr.every(callbackfn, a)');
