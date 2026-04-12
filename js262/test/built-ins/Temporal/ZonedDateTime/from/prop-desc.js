

/*---
esid: sec-temporal.zoneddatetime.from
description: The "from" property of Temporal.ZonedDateTime
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.from,
  "function",
  "`typeof ZonedDateTime.from` is `function`"
);

verifyProperty(Temporal.ZonedDateTime, "from", {
  writable: true,
  enumerable: false,
  configurable: true,
});
