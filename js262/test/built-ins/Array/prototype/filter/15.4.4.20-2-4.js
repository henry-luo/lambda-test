

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

var arrProtoLen;

function callbackfn(val, idx, obj) {
  return obj.length === 2;
}

arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;
var newArr = [12, 11].filter(callbackfn);

assert.sameValue(newArr.length, 2, 'newArr.length');
