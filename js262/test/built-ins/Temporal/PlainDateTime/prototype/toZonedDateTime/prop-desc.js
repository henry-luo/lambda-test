

/*---
esid: sec-temporal.plaindatetime.prototype.tozoneddatetime
description: The "toZonedDateTime" property of Temporal.PlainDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDateTime.prototype.toZonedDateTime,
  "function",
  "`typeof PlainDateTime.prototype.toZonedDateTime` is `function`"
);

verifyProperty(Temporal.PlainDateTime.prototype, "toZonedDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
