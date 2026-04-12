

/*---
info: The Date.prototype has the property "setTime"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setTime"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setTime"),
  true,
  'Date.prototype.hasOwnProperty("setTime") must return true'
);
