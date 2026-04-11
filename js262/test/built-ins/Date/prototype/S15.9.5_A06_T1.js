

/*---
info: The Date.prototype has the property "toLocaleDateString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toLocaleDateString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toLocaleDateString"),
  true,
  'Date.prototype.hasOwnProperty("toLocaleDateString") must return true'
);
