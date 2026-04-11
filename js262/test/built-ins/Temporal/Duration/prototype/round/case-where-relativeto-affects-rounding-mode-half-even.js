

/*---
esid: sec-temporal.duration.prototype.round
description: >
  Rare edge case where presence or absence of relativeTo affects the rounding
  behaviour of rounding mode halfEven
features: [Temporal]
includes: [temporalHelpers.js]
---*/

const plainRelativeTo = new Temporal.PlainDate(1970, 1, 1);
const zonedRelativeTo = new Temporal.ZonedDateTime(0n, "UTC");

const duration = new Temporal.Duration(0, 0, 0, 3, 12);  
const commonOptions = { smallestUnit: "hours", roundingIncrement: 8, roundingMode: "halfEven" };


TemporalHelpers.assertDuration(
  duration.round(commonOptions),
  0, 0, 0, 3, 8, 0, 0, 0, 0, 0, 
  "halfEven rounding is downward with no relativeTo"
);


TemporalHelpers.assertDuration(
  duration.round({ ...commonOptions, relativeTo: plainRelativeTo }),
  0, 0, 0, 3, 8, 0, 0, 0, 0, 0, 
  "halfEven rounding is downward with PlainDate relativeTo"
);


TemporalHelpers.assertDuration(
  duration.round({ ...commonOptions, relativeTo: zonedRelativeTo }),
  0, 0, 0, 3, 16, 0, 0, 0, 0, 0, 
  "halfEven rounding is upward with ZonedDateTime relativeTo"
);
