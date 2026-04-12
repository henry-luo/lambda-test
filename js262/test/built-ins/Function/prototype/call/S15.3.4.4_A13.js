

/*---
es5id: 15.3.4.4_A13
description: If IsCallable(func) is false, then throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Function.prototype.call.call(undefined, {});
}, 'Function.prototype.call.call(undefined, {}) throws a TypeError exception');
