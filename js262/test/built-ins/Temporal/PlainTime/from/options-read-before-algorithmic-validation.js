

/*---
esid: sec-temporal.plaintime.from
description: >
  All options properties are read and cast before any algorithmic validation
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

const expected = [
  "get options.overflow",
  "get options.overflow.toString",
  "call options.overflow.toString",
];
const actual = [];

const options = TemporalHelpers.propertyBagObserver(actual, {
  overflow: "reject",
}, "options");

assert.throws(RangeError, function () {
  Temporal.PlainTime.from({ hour: 24 }, options);
}, "overflow reject exception thrown");
assert.compareArray(actual, expected, "all options should be read first");
