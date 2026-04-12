

/*---
esid: sec-temporal.plaindate.prototype.withcalendar
description: The "withCalendar" property of Temporal.PlainDate.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.PlainDate.prototype.withCalendar,
  "function",
  "`typeof PlainDate.prototype.withCalendar` is `function`"
);

verifyProperty(Temporal.PlainDate.prototype, "withCalendar", {
  writable: true,
  enumerable: false,
  configurable: true,
});
