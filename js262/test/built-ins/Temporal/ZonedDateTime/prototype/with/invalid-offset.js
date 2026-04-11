

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Invalid disambiguation.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");

[
  "",
  "PREFER",
  "balance"
].forEach(offset => assert.throws(RangeError, () => zdt.with({ day: 5 }, { offset })));
