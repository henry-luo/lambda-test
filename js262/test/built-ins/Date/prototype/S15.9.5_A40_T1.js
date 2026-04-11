

/*---
info: The Date.prototype has the property "setFullYear"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setFullYear"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setFullYear"),
  true,
  'Date.prototype.hasOwnProperty("setFullYear") must return true'
);
