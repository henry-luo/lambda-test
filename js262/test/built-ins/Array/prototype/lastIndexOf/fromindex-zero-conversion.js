

/*---
esid: sec-array.prototype.lastindexof
description: >
  Return +0 when fromIndex is -0 and return index refers to the first position
info: |
  22.1.3.15 Array.prototype.lastIndexOf ( searchElement [ , fromIndex ] )

  ...
  5. If n ≥ 0, then
    a. If n is -0, let k be +0; else let k be min(n, len - 1).
  ...
---*/

assert.sameValue(1 / [true].lastIndexOf(true, -0), +Infinity);
