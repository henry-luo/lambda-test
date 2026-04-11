

/*---
esid: sec-temporal.zoneddatetime.prototype.tostring
description: >
  toString returns correct output for all time zone identifiers from
  Intl.supportedValuesOf.
features: [Temporal, Intl-enumeration]
---*/

function timeZoneId(zdt) {
  let str = zdt.toString();
  let m = str.match(/(?<=\[)[\w\/_+-]+(?=\])/);
  assert.sameValue(m !== null, true, str);
  return m[0];
}

for (let id of Intl.supportedValuesOf("timeZone")) {
  let instance = new Temporal.ZonedDateTime(0n, id);

  assert.sameValue(timeZoneId(instance), id);
}
