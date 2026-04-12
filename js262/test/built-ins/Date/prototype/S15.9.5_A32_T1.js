

/*---
info: The Date.prototype has the property "setMinutes"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setMinutes"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setMinutes"),
  true,
  'Date.prototype.hasOwnProperty("setMinutes") must return true'
);
