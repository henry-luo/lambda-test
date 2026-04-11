

/*---
esid: sec-array.prototype.reduce
description: Array.prototype.reduce - 'initialValue' is not present
---*/

var str = "initialValue is not present";

assert.sameValue([str].reduce(function() {}), str, '[str].reduce(function () { })');
