

/*---
info: The Date.prototype has the property "setHours"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setHours"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setHours"),
  true,
  'Date.prototype.hasOwnProperty("setHours") must return true'
);
