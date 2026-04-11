

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight doesn't consider unvisited deleted
    elements in array after the call
---*/

function callbackfn(prevVal, curVal, idx, obj)
{
  delete arr[1];
  delete arr[4];
  return prevVal + curVal;
}

var arr = ['1', 2, 3, 4, 5];


assert.sameValue(arr.reduceRight(callbackfn), "121", 'arr.reduceRight(callbackfn)');
