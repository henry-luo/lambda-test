

/*---
info: The Date.prototype has the property "toTimeString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toTimeString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toTimeString"),
  true,
  'Date.prototype.hasOwnProperty("toTimeString") must return true'
);
