

/*---
info: The Date.prototype has the property "getTimezoneOffset"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getTimezoneOffset"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getTimezoneOffset"),
  true,
  'Date.prototype.hasOwnProperty("getTimezoneOffset") must return true'
);
