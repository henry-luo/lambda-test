

/*---
esid: sec-array.prototype.reduceright
description: >
    Array.prototype.reduceRight returns initialvalue when Array is
    empty and initialValue is not present
---*/

function callbackfn(prevVal, curVal, idx, obj)
{}

var arr = new Array(10);


assert.sameValue(arr.reduceRight(callbackfn, 5), 5, 'arr.reduceRight(callbackfn,5)');
