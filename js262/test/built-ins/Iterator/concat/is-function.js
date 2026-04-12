

/*---
esid: sec-iterator.concat
description: >
  Iterator.concat is a built-in function
features: [iterator-sequencing]
---*/

assert.sameValue(
  typeof Iterator.concat,
  "function",
  "The value of `typeof Iterator.concat` is 'function'"
);
