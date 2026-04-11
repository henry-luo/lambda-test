

/*---
esid: sec-temporal.plaindatetime.prototype.tozoneddatetime
description: >
  Throws a RangeError if the date/time value is outside the instant limits
info: |
  Temporal.PlainDateTime.prototype.toZonedDateTime ( temporalTimeZoneLike [ , options ] )
  ...
  6. Let instant be ? BuiltinTimeZoneGetInstantFor(timeZone, dateTime, disambiguation).
  ...
features: [Temporal]
---*/


{
  let dt = new Temporal.PlainDateTime(-271821, 4, 19, 0, 0, 0, 0, 0, 1);
  assert.throws(RangeError, () => dt.toZonedDateTime("UTC"));
}
{
  let dt = new Temporal.PlainDateTime(-271821, 4, 19, 1, 0, 0, 0, 0, 0);
  assert.throws(RangeError, () => dt.toZonedDateTime("UTC"));
}


{
  let dt = new Temporal.PlainDateTime(275760, 9, 13, 0, 0, 0, 0, 0, 1);
  assert.throws(RangeError, () => dt.toZonedDateTime("UTC"));
}
{
  let dt = new Temporal.PlainDateTime(275760, 9, 13, 1, 0, 0, 0, 0, 0);
  assert.throws(RangeError, () => dt.toZonedDateTime("UTC"));
}
