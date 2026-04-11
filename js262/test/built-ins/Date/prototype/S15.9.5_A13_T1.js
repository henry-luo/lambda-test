

/*---
info: The Date.prototype has the property "getUTCMonth"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getUTCMonth"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getUTCMonth"),
  true,
  'Date.prototype.hasOwnProperty("getUTCMonth") must return true'
);
