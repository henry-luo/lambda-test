

/*---
info: The Date.prototype has the property "valueOf"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "valueOf"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("valueOf"),
  true,
  'Date.prototype.hasOwnProperty("valueOf") must return true'
);
