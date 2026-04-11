

/*---
esid: sec-array.prototype.lastindexof
description: >
    Array.prototype.lastIndexOf applied to Arguments object which
    implements its own property get method (number of arguments equals
    to number of parameters)
---*/

var func = function(a, b) {
  return 0 === Array.prototype.lastIndexOf.call(arguments, arguments[0]) &&
    1 === Array.prototype.lastIndexOf.call(arguments, arguments[1]) &&
    -1 === Array.prototype.lastIndexOf.call(arguments, arguments[2]);
};

assert(func(0, true), 'func(0, true) !== true');
