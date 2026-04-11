

/*---
esid: sec-array.prototype.filter
description: >
    Array.prototype.filter - Array.isArray(arg) returns true when arg
    is the returned array
---*/

var newArr = [11].filter(function() {});

assert(Array.isArray(newArr), 'Array.isArray(newArr) !== true');
