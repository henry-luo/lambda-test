

/*---
esid: sec-temporal.zoneddatetime.prototype.round
description: >
  Throws RangeError when rounded ISO date-time is outside the valid limits.
info: |
  Temporal.ZonedDateTime.prototype.round ( roundTo )

  ...
  18. If smallestUnit is day, then
    ...
  19. Else,
    a. Let roundResult be RoundISODateTime(isoDateTime, roundingIncrement,
       smallestUnit, roundingMode).
    ...
    c. Let epochNanoseconds be ? InterpretISODateTimeOffset(roundResult.[[ISODate]],
       roundResult.[[Time]], option, offsetNanoseconds, timeZone, compatible, prefer,
       match-exactly).
  ...
features: [Temporal]
---*/

var nsMaxInstant = 864n * 10n**19n;

var epochNs = nsMaxInstant;
var zdt = new Temporal.ZonedDateTime(epochNs, "+23:59");

var roundTo = {
  smallestUnit: "minutes",
  roundingIncrement: 10,
  roundingMode: "ceil",
};


assert.throws(RangeError, () => zdt.round(roundTo));
