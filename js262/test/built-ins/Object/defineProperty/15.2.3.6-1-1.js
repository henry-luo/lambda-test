

/*---
es5id: 15.2.3.6-1-1
description: Object.defineProperty applied to undefined throws a TypeError
---*/

assert.throws(TypeError, function() {
  Object.defineProperty(undefined, "foo", {});
});
