

/*---
esid: sec-temporal.plainmonthday.from
description: overflow property is not extracted with ISO-invalid string argument.
includes: [compareArray.js, temporalHelpers.js]
features: [Temporal]
---*/

let actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, { overflow: "constrain" }, "options");

assert.throws(RangeError, () => Temporal.PlainMonthDay.from("13-34", options));
assert.compareArray(actual, [], "options read after string parsing");
