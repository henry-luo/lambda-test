

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce visits deleted element in array after the
    call when same index is also present in prototype
---*/

function callbackfn(prevVal, curVal, idx, obj)
{
  delete arr[3];
  delete arr[4];
  return prevVal + curVal;
}

Array.prototype[4] = 5;
var arr = ['1', 2, 3, 4, 5];
var res = arr.reduce(callbackfn);
delete Array.prototype[4];


assert.sameValue(res, "1235", 'res');
