

/*---
esid: sec-symbol-constructor
description: The Symbol constructor may not be invoked with `new`
info: |
    1. If NewTarget is not undefined, throw a TypeError exception.
features: [Symbol]
---*/

assert.throws(TypeError, function() {
  new Symbol();
});

assert.throws(TypeError, function() {
  new Symbol('1');
});
