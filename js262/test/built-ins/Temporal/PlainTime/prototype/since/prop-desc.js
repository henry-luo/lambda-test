

/*---
esid: sec-temporal.plaintime.prototype.since
description: The "since" property of Temporal.PlainTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainTime.prototype.since,
  "function",
  "`typeof PlainTime.prototype.since` is `function`"
);

verifyProperty(Temporal.PlainTime.prototype, "since", {
  writable: true,
  enumerable: false,
  configurable: true,
});
