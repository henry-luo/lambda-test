

/*---
esid: sec-temporal.plaintime.prototype.tolocalestring
description: Using dateStyle, even if timeStyle is present, should throw
features: [Temporal]
---*/

const item = new Temporal.PlainTime(0, 0);

assert.throws(TypeError, function() {
  item.toLocaleString("en", { dateStyle: "full", timeStyle: "full" });
});
