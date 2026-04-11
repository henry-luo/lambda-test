

/*---
info: The Date.prototype has the property "getUTCHours"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getUTCHours"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getUTCHours"),
  true,
  'Date.prototype.hasOwnProperty("getUTCHours") must return true'
);
