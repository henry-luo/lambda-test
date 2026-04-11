

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf - 'length' is own data property that
    overrides an inherited data property on an Array
---*/

var targetObj = {};
var arrProtoLen;

arrProtoLen = Array.prototype.length;
Array.prototype.length = 0;

assert.sameValue([0, targetObj].indexOf(targetObj), 1, '[0, targetObj].indexOf(targetObj)');
