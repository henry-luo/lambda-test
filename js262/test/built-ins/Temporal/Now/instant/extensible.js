

/*---
esid: sec-temporal.now.instant
description: Temporal.Now.instant is extensible.
features: [Temporal]
---*/

assert(
  Object.isExtensible(Temporal.Now.instant),
  'Object.isExtensible(Temporal.Now.instant) must return true'
);
