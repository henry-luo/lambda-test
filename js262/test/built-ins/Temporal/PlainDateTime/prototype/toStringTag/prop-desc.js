

/*---
esid: sec-temporal.plaindatetime.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.PlainDateTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainDateTime.prototype, Symbol.toStringTag, {
  value: "Temporal.PlainDateTime",
  writable: false,
  enumerable: false,
  configurable: true,
});
