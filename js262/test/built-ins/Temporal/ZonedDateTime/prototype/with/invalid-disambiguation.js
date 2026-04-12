

/*---
esid: sec-temporal.zoneddatetime.prototype.with
description: Invalid disambiguation.
features: [Temporal]
---*/

const zdt = new Temporal.ZonedDateTime(0n, "UTC");

[
  "",
  "EARLIER",
  "balance"
].forEach(disambiguation => assert.throws(RangeError, () => zdt.with({ day: 5 }, { disambiguation })));
