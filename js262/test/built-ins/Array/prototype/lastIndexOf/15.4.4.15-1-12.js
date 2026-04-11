

/*---
esid: sec-array.prototype.lastindexof
description: Array.prototype.lastIndexOf applied to RegExp object
---*/

var obj = new RegExp("afdasf");
obj.length = 100;
obj[1] = "afdasf";

assert.sameValue(Array.prototype.lastIndexOf.call(obj, "afdasf"), 1, 'Array.prototype.lastIndexOf.call(obj, "afdasf")');
