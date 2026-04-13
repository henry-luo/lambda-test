

/*---
esid: sec-temporal.duration.prototype.round
description: >
    Balancing the resulting duration takes the time zone's UTC offset shifts
    into account
includes: [temporalHelpers.js]
features: [Temporal]
---*/


{
    const duration = new Temporal.Duration(1, 0, 0, 0, 24);
    const relativeTo = new Temporal.ZonedDateTime(
        941184000_000_000_000n ,
        "America/Vancouver"); 

    const result = duration.round({ largestUnit: "years", relativeTo });
    TemporalHelpers.assertDuration(result, 1, 0, 0, 0, 24, 0, 0, 0, 0, 0,
        "24 hours does not balance to 1 day in 25-hour day");
}

{
  const duration = new Temporal.Duration(0, 0, 0, 0,  24, 0, 0, 0, 0,  5);
  const relativeTo = new Temporal.ZonedDateTime(
    972802800_000_000_000n ,
    "America/Vancouver"); 
  
  const result = duration.round({
    largestUnit: "days",
    smallestUnit: "minutes",
    roundingMode: "expand",
    roundingIncrement: 30,
    relativeTo
  });
  TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 24, 30, 0, 0, 0, 0,
    "24 hours does not balance after rounding to 1 day in 25-hour day");
}
