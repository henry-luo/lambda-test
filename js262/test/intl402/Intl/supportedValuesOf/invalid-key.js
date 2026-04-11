

/*---
esid: sec-intl.supportedvaluesof
description: >
  Intl.supportedValuesOf throws a RangeError if the key is invalid.
info: |
  Intl.supportedValuesOf ( key )

  1. Let key be ? ToString(key).
  ...
  8. Else,
    a. Throw a RangeError exception.
  ...
features: [Intl-enumeration]
---*/

const invalidKeys = [
  
  "",

  
  "hourCycle", "locale", "language", "script", "region",

  
  "calendars", "collations", "currencies", "numberingSystems", "timeZones", "units",

  
  "CALENDAR", "Collation", "Currency", "numberingsystem", "timezone", "UNIT",

  
  "calendar\0",

  
  undefined, null, false, true, NaN, 0, Math.PI, 123n, {}, [],
];

for (let key of invalidKeys) {
  assert.throws(RangeError, function() {
    Intl.supportedValuesOf(key);
  }, "key: " + key);
}
