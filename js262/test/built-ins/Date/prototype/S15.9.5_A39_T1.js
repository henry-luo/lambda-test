

/*---
info: The Date.prototype has the property "setUTCMonth"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCMonth"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCMonth"),
  true,
  'Date.prototype.hasOwnProperty("setUTCMonth") must return true'
);
