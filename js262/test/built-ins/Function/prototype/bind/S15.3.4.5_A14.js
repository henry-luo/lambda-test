

/*---
es5id: 15.3.4.5_A14
description: If IsCallable(func) is false, then throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Function.prototype.bind.call(null, {});
}, 'Function.prototype.bind.call(null, {}) throws a TypeError exception');
