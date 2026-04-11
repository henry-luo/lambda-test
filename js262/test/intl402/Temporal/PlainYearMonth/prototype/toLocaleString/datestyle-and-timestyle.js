

/*---
esid: sec-temporal.plainyearmonth.prototype.tolocalestring
description: Using timeStyle, even if dateStyle is present, should throw
features: [Temporal]
---*/

const item = new Temporal.PlainYearMonth(2026, 1, "gregory", 1);

assert.throws(TypeError, function() {
  item.toLocaleString("en-u-ca-gregory", { dateStyle: "full", timeStyle: "full" });
});
