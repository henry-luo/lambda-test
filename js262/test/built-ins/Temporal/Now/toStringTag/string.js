

/*---
esid: sec-temporal-now-@@tostringtag
description: The @@toStringTag property of Temporal.Now produces the correct value in toString
features: [Symbol.toStringTag, Temporal]
---*/

assert.sameValue(String(Temporal.Now), "[object Temporal.Now]");
