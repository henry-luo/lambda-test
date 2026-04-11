

/*---
esid: sec-object.values
description: Object.values should fail if given a null or undefined value
author: Jordan Harband
---*/

assert.throws(TypeError, function() {
  Object.values(null);
});

assert.throws(TypeError, function() {
  Object.values(undefined);
});
