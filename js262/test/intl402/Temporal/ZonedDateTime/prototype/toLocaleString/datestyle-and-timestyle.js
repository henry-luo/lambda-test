

/*---
esid: sec-temporal.zoneddatetime.prototype.tolocalestring
description: Using both dateStyle and timeStyle should not throw
features: [Temporal]
---*/

const item = new Temporal.ZonedDateTime(0n, "UTC");
var result = item.toLocaleString("en", { dateStyle: "full", timeStyle: "full" });
assert.sameValue(result.includes(":00"), true, "using both dateStyle and timeStyle should not throw");
