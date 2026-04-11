

/*---
info: The Date.prototype has the property "toDateString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toDateString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toDateString"),
  true,
  'Date.prototype.hasOwnProperty("toDateString") must return true'
);
