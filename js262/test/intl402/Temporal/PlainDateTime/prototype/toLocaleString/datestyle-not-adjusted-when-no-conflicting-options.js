

/*---
esid: sec-temporal.plaindatetime.prototype.tolocalestring
description: >
  AdjustDateTimeStyleFormat should not adjust format when no conflicting options
  are present. See https://github.com/tc39/proposal-temporal/issues/3062
features: [Temporal]
locale: [ja]
---*/

const date = new Date(0);
const plainDateTime = new Temporal.PlainDateTime(1970, 1, 1);

const options = { dateStyle: "full", timeZone: "UTC" };

assert.sameValue(
  date.toLocaleString("ja", options),
  plainDateTime.toLocaleString("ja", options)
);
