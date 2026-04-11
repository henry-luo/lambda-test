

/*---
info: The Date.prototype has the property "setUTCFullYear"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCFullYear"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCFullYear"),
  true,
  'Date.prototype.hasOwnProperty("setUTCFullYear") must return true'
);
