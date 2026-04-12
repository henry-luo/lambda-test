

/*---
esid: sec-array.prototype.indexof
description: Array.prototype.indexOf must return correct index (Array)
---*/

var b = new Array("0,1");
var a = new Array(0, b, "0,1", 3);

assert.sameValue(a.indexOf(b.toString()), 2, 'a.indexOf(b.toString())');
assert.sameValue(a.indexOf("0,1"), 2, 'a.indexOf("0,1")');
