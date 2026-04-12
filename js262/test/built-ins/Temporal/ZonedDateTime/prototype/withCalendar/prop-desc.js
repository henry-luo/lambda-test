

/*---
esid: sec-temporal.zoneddatetime.prototype.withcalendar
description: The "withCalendar" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.withCalendar,
  "function",
  "`typeof ZonedDateTime.prototype.withCalendar` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "withCalendar", {
  writable: true,
  enumerable: false,
  configurable: true,
});
