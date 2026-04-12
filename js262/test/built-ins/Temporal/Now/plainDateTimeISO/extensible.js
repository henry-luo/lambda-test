

/*---
esid: sec-temporal.now.plaindatetimeiso
description: Temporal.Now.plainDateTimeISO is extensible.
features: [Temporal]
---*/

assert(
  Object.isExtensible(Temporal.Now.plainDateTimeISO),
  'Object.isExtensible(Temporal.Now.plainDateTimeISO) must return true'
);
