

/*---
info: The Date.prototype has the property "setUTCMinutes"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCMinutes"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCMinutes"),
  true,
  'Date.prototype.hasOwnProperty("setUTCMinutes") must return true'
);
