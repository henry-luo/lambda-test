

/*---
es5id: 15.3.4.5_A15
description: If IsCallable(func) is false, then throw a TypeError exception.
---*/

assert.throws(TypeError, function() {
  Function.prototype.bind.call({}, {});
}, 'Function.prototype.bind.call({}, {}) throws a TypeError exception');
