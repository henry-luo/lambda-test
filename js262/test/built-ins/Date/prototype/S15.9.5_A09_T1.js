

/*---
info: The Date.prototype has the property "getTime"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getTime"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getTime"),
  true,
  'Date.prototype.hasOwnProperty("getTime") must return true'
);
