

/*---
esid: sec-array.prototype.filter
description: Array.prototype.filter - the returned array is instanceof Array
---*/

var newArr = [11].filter(function() {});

assert(newArr instanceof Array, 'newArr instanceof Array !== true');
