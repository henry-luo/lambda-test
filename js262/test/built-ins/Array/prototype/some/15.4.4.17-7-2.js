

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some considers new value of elements in array
    after it is called
---*/

function callbackfn(val, idx, obj)
{
  arr[4] = 6;
  if (val < 6)
    return false;
  else
    return true;
}

var arr = [1, 2, 3, 4, 5];


assert.sameValue(arr.some(callbackfn), true, 'arr.some(callbackfn)');
