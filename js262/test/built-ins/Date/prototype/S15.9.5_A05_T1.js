

/*---
info: The Date.prototype has the property "toLocaleString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toLocaleString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toLocaleString"),
  true,
  'Date.prototype.hasOwnProperty("toLocaleString") must return true'
);
