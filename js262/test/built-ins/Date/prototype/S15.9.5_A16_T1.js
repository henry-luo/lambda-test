

/*---
info: The Date.prototype has the property "getDay"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getDay"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getDay"),
  true,
  'Date.prototype.hasOwnProperty("getDay") must return true'
);
