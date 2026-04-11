

/*---
esid: sec-promise.allsettledkeyed
description: >
  Promise.allSettledKeyed is initially extensible.
info: |
  Unless specified otherwise, the [[Extensible]] internal slot
  of a built-in object initially has the value true.
features: [await-dictionary]
---*/

assert(Object.isExtensible(Promise.allSettledKeyed));
