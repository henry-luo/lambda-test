

/*---
info: |
    Let O be the result of calling ToObject passing the this value as the
    argument.
es5id: 15.2.4.4_A14
description: Checking Object.prototype.valueOf invoked by the 'call' property.
---*/

assert.throws(TypeError, function() {
  (1, Object.prototype.valueOf)();
}, '(1, Object.prototype.valueOf)() throws a TypeError exception');
