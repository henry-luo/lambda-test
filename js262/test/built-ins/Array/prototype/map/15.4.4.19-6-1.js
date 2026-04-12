

/*---
esid: sec-array.prototype.map
description: >
    Array.prototype.map - Array.isArray returns true when input
    argument is the ourput array
---*/

var newArr = [11].map(function() {});

assert(Array.isArray(newArr), 'Array.isArray(newArr) !== true');
