

/*---
esid: sec-promise.allkeyed
description: >
  Promise.allKeyed is initially extensible.
info: |
  Unless specified otherwise, the [[Extensible]] internal slot
  of a built-in object initially has the value true.
features: [await-dictionary]
---*/

assert(Object.isExtensible(Promise.allKeyed));
