

/*---
info: The Date.prototype has the property "setDate"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setDate"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setDate"),
  true,
  'Date.prototype.hasOwnProperty("setDate") must return true'
);
