

/*---
esid: sec-intl.supportedvaluesof
description: >
  Input key is coerced with ToString.
info: |
  Intl.supportedValuesOf ( key )

  1. Let key be ? ToString(key).
  2. If key is "calendar", then
    a. Let list be ! AvailableCalendars( ).
  ...
  9. Return ! CreateArrayFromList( list ).
includes: [compareArray.js]
features: [Intl-enumeration]
---*/

const calendars = Intl.supportedValuesOf("calendar");


assert.compareArray(Intl.supportedValuesOf(new String("calendar")), calendars);


let obj = {
  toString() {
    return "calendar";
  }
};
assert.compareArray(Intl.supportedValuesOf(obj), calendars);


assert.throws(TypeError, function() {
  Intl.supportedValuesOf(Symbol());
});
