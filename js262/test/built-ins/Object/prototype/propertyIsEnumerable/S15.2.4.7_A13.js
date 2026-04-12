

/*---
es5id: 15.2.4.7_A13
description: >
    Let O be the result of calling ToObject passing the this value as
    the argument.
---*/

assert.throws(TypeError, function() {
  Object.prototype.propertyIsEnumerable.call(null, 'foo');
}, 'Object.prototype.propertyIsEnumerable.call(null, "foo") throws a TypeError exception');
