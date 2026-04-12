

/*---
info: The Date.prototype has the property "getHours"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getHours"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getHours"),
  true,
  'Date.prototype.hasOwnProperty("getHours") must return true'
);
