

/*---
esid: sec-array.prototype.reduce
description: >
    Array.prototype.reduce returns initialvalue when Array is empty
    and initialValue is present
---*/

function callbackfn(prevVal, curVal, idx, obj)
{}

var arr = new Array(10);

assert.sameValue(arr.reduce(callbackfn, 5), 5, 'arr.reduce(callbackfn,5)');
