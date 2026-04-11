

/*---
info: The Date.prototype has the property "setUTCHours"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCHours"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCHours"),
  true,
  'Date.prototype.hasOwnProperty("setUTCHours") must return true'
);
