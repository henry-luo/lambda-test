

/*---
esid: sec-temporal.zoneddatetime.prototype.toplaindatetime
description: The "toPlainDateTime" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.toPlainDateTime,
  "function",
  "`typeof ZonedDateTime.prototype.toPlainDateTime` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "toPlainDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
