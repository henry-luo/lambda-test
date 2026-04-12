

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - callbackfn takes 3 arguments
---*/

function callbackfn(val, Idx, obj)
{
  if (arguments.length === 3) 
    return true;
}

var arr = [0, 1, true, null, new Object(), "five"];
arr[999999] = -6.6;


assert.sameValue(arr.every(callbackfn), true, 'arr.every(callbackfn)');
