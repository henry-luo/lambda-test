

/*---
esid: sec-temporal.zoneddatetime.prototype.tolocalestring
description: Tests that a ZonedDateTime with an offset time zone can be formatted with toLocaleString
locale: [en]
features: [Temporal]
---*/

var zdt = new Temporal.ZonedDateTime(0n, "+00:00");
var result = zdt.toLocaleString("en");
assert(result.includes("GMT") && !result.includes("+") && !result.includes("-"));

zdt = new Temporal.ZonedDateTime(0n, "+01:00");
result = zdt.toLocaleString("en");
assert(result.includes("GMT+1"));

zdt = new Temporal.ZonedDateTime(0n, "-01:00");
result = zdt.toLocaleString("en");
assert(result.includes("GMT-1"));
