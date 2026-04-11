

/*---
es5id: 15.3.4.5_A13
description: If IsCallable(func) is false, then throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Function.prototype.bind.call(undefined, {});
}, 'Function.prototype.bind.call(undefined, {}) throws a TypeError exception');
