

/*---
info: The Date.prototype has the property "getMinutes"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getMinutes"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getMinutes"),
  true,
  'Date.prototype.hasOwnProperty("getMinutes") must return true'
);
