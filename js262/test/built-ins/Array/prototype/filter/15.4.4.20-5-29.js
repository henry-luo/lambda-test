

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - returns an array whose length is 0
---*/

var newArr = [11].filter(function() {});

assert.sameValue(newArr.length, 0, 'newArr.length');
