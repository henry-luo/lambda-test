

/*---
esid: sec-temporal.plaintime.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.PlainTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainTime.prototype, Symbol.toStringTag, {
  value: "Temporal.PlainTime",
  writable: false,
  enumerable: false,
  configurable: true,
});
