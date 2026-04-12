

/*---
es5id: 15.2.3.6-1-2
description: Object.defineProperty applied to null throws a TypeError
---*/

assert.throws(TypeError, function() {
  Object.defineProperty(null, "foo", {});
});
