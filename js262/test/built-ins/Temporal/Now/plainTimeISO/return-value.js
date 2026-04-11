

/*---
esid: sec-temporal.now.plaintimeiso
description: Functions when time zone argument is omitted
features: [Temporal]
---*/

const t = Temporal.Now.plainTimeISO();
assert(t instanceof Temporal.PlainTime);
