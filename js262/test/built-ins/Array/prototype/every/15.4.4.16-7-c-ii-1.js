

/*---
esid: sec-array.prototype.every
description: Array.prototype.every - callbackfn called with correct parameters
---*/

function callbackfn(val, Idx, obj)
{
  if (obj[Idx] === val)
    return true;
}

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


assert.sameValue(arr.every(callbackfn), true, 'arr.every(callbackfn)');
