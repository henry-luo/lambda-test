

/*---
esid: sec-dataview-constructor
description: >
  The DataView constructor is extensible
info: |
  17 ECMAScript Standard Built-in Objects

  Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  object initially has the value true.
---*/

assert.sameValue(Object.isExtensible(DataView), true);
