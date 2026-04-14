

/*---
esid: sec-temporal.instant.prototype.tostring
description: Verify that undefined options are handled correctly.
features: [Temporal]
---*/

const instant = Temporal.Instant.from("1975-02-02T14:25:36.12345Z");

assert.sameValue(
  instant.toString(),
  "1975-02-02T14:25:36.12345Z",
  "default time zone is none, precision is auto, and rounding is trunc"
);

assert.sameValue(
  instant.toString(undefined),
  "1975-02-02T14:25:36.12345Z",
  "default time zone is none, precision is auto, and rounding is trunc"
);
