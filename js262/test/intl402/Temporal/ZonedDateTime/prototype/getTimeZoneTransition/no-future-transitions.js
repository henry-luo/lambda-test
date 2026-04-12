

/*---
esid: sec-temporal.zoneddatetime.prototype.gettimezonetransition
description: >
  Named time zones that no longer observe DST return null for the "next"
  direction when queried from a date after their last transition.
info: |
  Some time zones historically observed DST but no longer do. When queried for
  "next" from a date after the last historical transition, the result should be
  null. When queried for "previous", it should find the last historical
  transition.
features: [Temporal]
---*/


var zdt = Temporal.ZonedDateTime.from("2024-06-15T12:00:00[Asia/Kolkata]");

assert.sameValue(
  zdt.getTimeZoneTransition("next"),
  null,
  "Asia/Kolkata should have no next time zone transition from 2024"
);

var prev = zdt.getTimeZoneTransition("previous");
assert.notSameValue(
  prev,
  null,
  "Asia/Kolkata should have a previous time zone transition (historical)"
);
