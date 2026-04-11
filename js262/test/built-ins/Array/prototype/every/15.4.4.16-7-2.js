

/*---
esid: sec-array.prototype.every
description: >
    Array.prototype.every considers new value of elements in array
    after the call
---*/

function callbackfn(val, Idx, obj)
{
  arr[4] = 6;
  if (val < 6)
    return true;
  else
    return false;
}

var arr = [1, 2, 3, 4, 5];


assert.sameValue(arr.every(callbackfn), false, 'arr.every(callbackfn)');
