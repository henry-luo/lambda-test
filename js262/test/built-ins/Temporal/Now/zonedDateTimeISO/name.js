

/*---
esid: sec-temporal.now.zoneddatetimeiso
description: Temporal.Now.zonedDateTimeISO.name is "zonedDateTimeISO".
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  Temporal.Now.zonedDateTimeISO.name,
  'zonedDateTimeISO',
  'The value of Temporal.Now.zonedDateTimeISO.name is expected to be "zonedDateTimeISO"'
);

verifyProperty(Temporal.Now.zonedDateTimeISO, 'name', {
  enumerable: false,
  writable: false,
  configurable: true
});
