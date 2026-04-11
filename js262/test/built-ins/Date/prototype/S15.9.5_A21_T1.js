

/*---
info: The Date.prototype has the property "getUTCMinutes"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getUTCMinutes"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getUTCMinutes"),
  true,
  'Date.prototype.hasOwnProperty("getUTCMinutes") must return true'
);
