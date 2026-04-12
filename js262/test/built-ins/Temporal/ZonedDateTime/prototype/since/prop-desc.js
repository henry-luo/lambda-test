

/*---
esid: sec-temporal.zoneddatetime.prototype.since
description: The "since" property of Temporal.ZonedDateTime.prototype
includes: [propertyHelper.js]
features: [Temporal]
---*/

assert.sameValue(
  typeof Temporal.ZonedDateTime.prototype.since,
  "function",
  "`typeof ZonedDateTime.prototype.since` is `function`"
);

verifyProperty(Temporal.ZonedDateTime.prototype, "since", {
  writable: true,
  enumerable: false,
  configurable: true,
});
