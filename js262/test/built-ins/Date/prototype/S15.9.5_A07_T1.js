

/*---
info: The Date.prototype has the property "toLocaleTimeString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toLocaleTimeString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toLocaleTimeString"),
  true,
  'Date.prototype.hasOwnProperty("toLocaleTimeString") must return true'
);
