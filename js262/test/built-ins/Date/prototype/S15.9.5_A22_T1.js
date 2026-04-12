

/*---
info: The Date.prototype has the property "getSeconds"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getSeconds"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getSeconds"),
  true,
  'Date.prototype.hasOwnProperty("getSeconds") must return true'
);
