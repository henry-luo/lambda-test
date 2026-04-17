

/*---
esid: sec-temporal.duration.prototype.total
description: >
    Balancing the resulting duration takes the time zone's UTC offset shifts
    into account
features: [Temporal]
---*/


const duration = new Temporal.Duration(1, 0, 0, 0, 24);
const relativeTo = new Temporal.ZonedDateTime(
    941184000_000_000_000n ,
    "America/Vancouver"); 

const result = duration.total({ unit: "days", relativeTo });
assert.sameValue(result, 366.96, "24 hours does not balance to 1 day in 25-hour day");
