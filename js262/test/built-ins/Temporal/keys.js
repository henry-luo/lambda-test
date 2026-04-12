

/*---
esid: sec-temporal-objects
description: Temporal has no enumerable properties
includes: [compareArray.js]
features: [Temporal]
---*/

const keys = Object.keys(Temporal);
assert.compareArray(keys, []);
