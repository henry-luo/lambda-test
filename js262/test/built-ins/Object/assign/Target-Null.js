

/*---
description: >
  Test the first argument(target) of Object.Assign(target,...sources),
  if target is null,Should Throw a TypeError exception.
es6id:  19.1.2.1.1
---*/

assert.throws(TypeError, function() {
  Object.assign(null, {
    a: 1
  });
});
