

/*---
info: The Date.prototype has the property "setSeconds"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setSeconds"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setSeconds"),
  true,
  'Date.prototype.hasOwnProperty("setSeconds") must return true'
);
