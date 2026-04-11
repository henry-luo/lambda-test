

/*---
es5id: 15.2.3.6-1-4
description: >
    Object.defineProperty applied to string primitive throws a
    TypeError
---*/

assert.throws(TypeError, function() {
  Object.defineProperty("hello\nworld\\!", "foo", {});
});
