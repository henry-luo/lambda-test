

/*---
esid: sec-temporal.now.instant
description: Temporal.Now.instant returns an Instant
features: [Temporal]
---*/

const instant = Temporal.Now.instant();
assert(instant instanceof Temporal.Instant);
