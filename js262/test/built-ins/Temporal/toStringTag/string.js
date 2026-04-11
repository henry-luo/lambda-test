

/*---
esid: sec-temporal-@@tostringtag
description: The @@toStringTag property of Temporal produces the correct value in toString
features: [Symbol.toStringTag, Temporal]
---*/

assert.sameValue(String(Temporal), "[object Temporal]");
