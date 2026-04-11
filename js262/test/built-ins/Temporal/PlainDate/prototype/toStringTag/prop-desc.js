

/*---
esid: sec-temporal.plaindate.prototype-@@tostringtag
description: The @@toStringTag property of Temporal.PlainDate
includes: [propertyHelper.js]
features: [Temporal]
---*/

verifyProperty(Temporal.PlainDate.prototype, Symbol.toStringTag, {
  value: "Temporal.PlainDate",
  writable: false,
  enumerable: false,
  configurable: true,
});
