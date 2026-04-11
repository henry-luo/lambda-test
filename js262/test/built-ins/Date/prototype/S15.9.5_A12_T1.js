

/*---
info: The Date.prototype has the property "getMonth"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getMonth"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getMonth"),
  true,
  'Date.prototype.hasOwnProperty("getMonth") must return true'
);
