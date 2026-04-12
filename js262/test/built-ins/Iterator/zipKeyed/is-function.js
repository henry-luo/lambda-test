

/*---
esid: sec-iterator.zipkeyed
description: >
  Iterator.zipKeyed is a built-in function
features: [joint-iteration]
---*/

assert.sameValue(
  typeof Iterator.zipKeyed,
  "function",
  "The value of `typeof Iterator.zipKeyed` is 'function'"
);
