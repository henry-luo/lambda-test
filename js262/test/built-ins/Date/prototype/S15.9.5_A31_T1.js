

/*---
info: The Date.prototype has the property "setUTCSeconds"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCSeconds"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCSeconds"),
  true,
  'Date.prototype.hasOwnProperty("setUTCSeconds") must return true'
);
