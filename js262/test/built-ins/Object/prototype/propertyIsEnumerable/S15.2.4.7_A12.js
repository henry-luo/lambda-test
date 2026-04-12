

/*---
es5id: 15.2.4.7_A12
description: >
    Let O be the result of calling ToObject passing the this value as
    the argument.
---*/

assert.throws(TypeError, function() {
  Object.prototype.propertyIsEnumerable.call(undefined, 'foo');
}, 'Object.prototype.propertyIsEnumerable.call(undefined, "foo") throws a TypeError exception');
