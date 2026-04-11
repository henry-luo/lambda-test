

/*---
description: Object.getOwnPropertyDescriptors should fail if given a null or undefined value
esid: sec-object.getownpropertydescriptors
author: Jordan Harband
---*/

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptors(null);
});

assert.throws(TypeError, function() {
  Object.getOwnPropertyDescriptors(undefined);
});
