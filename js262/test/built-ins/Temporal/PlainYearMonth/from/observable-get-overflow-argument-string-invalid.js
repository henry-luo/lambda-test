

/*---
esid: sec-temporal.plainyearmonth.from
description: overflow property is not extracted with ISO-invalid string argument.
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, { overflow: "constrain" }, "options");

assert.throws(RangeError, () => Temporal.PlainYearMonth.from("2020-13", options));
assert.compareArray(actual, [], "options read after string parsing");
