

/*---
esid: sec-iterator.zip
description: >
  Iterator.zip is a built-in function
features: [joint-iteration]
---*/

assert.sameValue(
  typeof Iterator.zip,
  "function",
  "The value of `typeof Iterator.zip` is 'function'"
);
