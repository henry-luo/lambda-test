

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: Temporal.Now.zonedDateTimeISO is extensible.
features: [Temporal]
---*/

assert(
  Object.isExtensible(Temporal.Now.zonedDateTimeISO),
  'Object.isExtensible(Temporal.Now.zonedDateTimeISO) must return true'
);
