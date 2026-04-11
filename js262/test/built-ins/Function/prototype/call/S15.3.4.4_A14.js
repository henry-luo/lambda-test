

/*---
es5id: 15.3.4.4_A14
description: If IsCallable(func) is false, then throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Function.prototype.call.call(null, {});
}, 'Function.prototype.call.call(null, {}) throws a TypeError exception');
