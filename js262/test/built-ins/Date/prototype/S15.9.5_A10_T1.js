

/*---
info: The Date.prototype has the property "getFullYear"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getFullYear"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getFullYear"),
  true,
  'Date.prototype.hasOwnProperty("getFullYear") must return true'
);
