

/*---
esid: sec-temporal.plaindatetime.prototype.since
description: The "since" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.since,
  "function",
  "`typeof PlainDateTime.prototype.since` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "since", {
  writable: true,
  enumerable: false,
  configurable: true,
});
