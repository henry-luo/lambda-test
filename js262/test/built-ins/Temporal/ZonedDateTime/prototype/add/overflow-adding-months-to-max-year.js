

/*---
esid: sec-temporal.zoneddatetime.prototype.add
description: Adding months to maximum year should throw
features: [Temporal]
---*/

const maxYear = new Temporal.PlainDate(275760, 1, 1).toZonedDateTime("UTC");
const duration = new Temporal.Duration(0, 5432, 5432, 0, 0, 0, 0, 0, 0, 0);
assert.throws(RangeError, () => maxYear.add(duration));

const minYear = new Temporal.ZonedDateTime(-(864n * 10n ** 19n), "UTC");
assert.throws(RangeError, () => minYear.add(duration.negated()));
