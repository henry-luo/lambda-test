

/*---
esid: sec-temporal.zoneddatetime
description: >
  ZonedDateTime constructor accepts all time zone identifiers from
  Intl.supportedValuesOf.
features: [Temporal, Intl-enumeration]
---*/


for (let id of Intl.supportedValuesOf("timeZone")) {
  let instance = new Temporal.ZonedDateTime(0n, id);

  assert.sameValue(instance.timeZoneId, id);
}
