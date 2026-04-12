

/*---
esid: sec-array.isarray
es5id: 15.4.3.2-2-3
description: >
    Array.isArray applied to an Array-like object with length and some
    indexed properties
---*/

assert.sameValue(Array.isArray({
  0: 12,
  1: 9,
  length: 2
}), false, 'Array.isArray({0: 12, 1: 9, length: 2}) must return false');
