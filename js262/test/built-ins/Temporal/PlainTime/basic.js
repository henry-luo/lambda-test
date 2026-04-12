

/*---
esid: sec-temporal.plaintime
description: Basic tests for the PlainTime constructor.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const args = [15, 23, 30, 123, 456, 789];
const plainTime = new Temporal.PlainTime(...args);
TemporalHelpers.assertPlainTime(plainTime, ...args);
