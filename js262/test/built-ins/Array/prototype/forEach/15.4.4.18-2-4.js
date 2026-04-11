

/*---
esid: sec-array.prototype.foreach
description: >
    Array.prototype.forEach - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

var result = false;
var arrProtoLen;

function callbackfn(val, idx, obj) {
  result = (obj.length === 2);
}

arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;
[12, 11].forEach(callbackfn);

assert(result, 'result !== true');
