

/*---
info: The Date.prototype has the property "getDate"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getDate"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getDate"),
  true,
  'Date.prototype.hasOwnProperty("getDate") must return true'
);
