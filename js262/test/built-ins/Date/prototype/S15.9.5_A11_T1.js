

/*---
info: The Date.prototype has the property "getUTCFullYear"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getUTCFullYear"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getUTCFullYear"),
  true,
  'Date.prototype.hasOwnProperty("getUTCFullYear") must return true'
);
