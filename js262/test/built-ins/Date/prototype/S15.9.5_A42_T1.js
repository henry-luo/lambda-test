

/*---
info: The Date.prototype has the property "toUTCString"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "toUTCString"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("toUTCString"),
  true,
  'Date.prototype.hasOwnProperty("toUTCString") must return true'
);
