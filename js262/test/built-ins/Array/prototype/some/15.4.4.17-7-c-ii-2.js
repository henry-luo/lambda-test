

/*---
esid: sec-array.prototype.some
description: Array.prototype.some - callbackfn takes 3 arguments
---*/

function callbackfn(val, idx, obj)
{
  if (arguments.length === 3) 
    return false;
  else
    return true;
}

var arr = [0, 1, true, null, new Object(), "five"];
arr[999999] = -6.6;


assert.sameValue(arr.some(callbackfn), false, 'arr.some(callbackfn)');
