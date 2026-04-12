

/*---
esid: sec-temporal.plaindate.prototype.tozoneddatetime
description: The "toZonedDateTime" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.toZonedDateTime,
  "function",
  "`typeof PlainDate.prototype.toZonedDateTime` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "toZonedDateTime", {
  writable: true,
  enumerable: false,
  configurable: true,
});
