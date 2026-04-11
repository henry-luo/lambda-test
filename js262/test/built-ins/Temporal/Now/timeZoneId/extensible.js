

/*---
esid: sec-temporal.now.timezoneid
description: Temporal.Now.timeZoneId is extensible.
info: |
  ## 17 ECMAScript Standard Built-in Objects

  Unless specified otherwise, the [[Extensible]] internal slot
  of a built-in object initially has the value true.
features: [Temporal]
---*/

assert(
  Object.isExtensible(Temporal.Now.timeZoneId),
  'Object.isExtensible(Temporal.Now.timeZoneId) must return true'
);
