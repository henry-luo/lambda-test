

/*---
esid: sec-array.prototype.map
description: Array.prototype.map - the returned array is instanceof Array
---*/

var newArr = [11].map(function() {});

assert(newArr instanceof Array, 'newArr instanceof Array !== true');
