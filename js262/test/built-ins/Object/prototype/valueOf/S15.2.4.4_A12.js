

/*---
info: |
    Let O be the result of calling ToObject passing the this value as the
    argument.
es5id: 15.2.4.4_A12
description: Checking Object.prototype.valueOf invoked by the 'call' property.
---*/

assert.throws(TypeError, function() {
  Object.prototype.valueOf.call(undefined);
}, 'Object.prototype.valueOf.call(undefined) throws a TypeError exception');
