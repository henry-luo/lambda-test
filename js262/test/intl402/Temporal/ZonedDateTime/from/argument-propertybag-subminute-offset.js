

/*---
esid: sec-temporal.zoneddatetime.from
description: Test a subminute timezone when the argument is a property bag.
features: [Temporal]
---*/


const zdt = Temporal.ZonedDateTime.from({
  year: 1971,
  month: 1,
  day: 1,
  hour: 12,
  timeZone: "Africa/Monrovia"
});
assert.sameValue(zdt.offset, "-00:44:30");
