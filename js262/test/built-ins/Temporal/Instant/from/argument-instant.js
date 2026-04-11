

/*---
esid: sec-temporal.instant.from
description: A Instant object is copied, not returned directly
features: [Temporal]
---*/

const orig = new Temporal.Instant(217_175_010_123_456_789n);
const result = Temporal.Instant.from(orig);

assert.sameValue(result.epochNanoseconds, 217_175_010_123_456_789n, "Instant is copied");

assert.notSameValue(
  result,
  orig,
  "When an Instant is given, the returned value is not the original Instant"
);
