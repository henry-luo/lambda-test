

/*---
es5id: 15.2.4.5_A13
description: >
    Let O be the result of calling ToObject passing the this value as
    the argument.
---*/

assert.throws(TypeError, function() {
  Object.prototype.hasOwnProperty.call(null, 'foo');
}, 'Object.prototype.hasOwnProperty.call(null, "foo") throws a TypeError exception');
