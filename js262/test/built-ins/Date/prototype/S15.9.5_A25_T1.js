

/*---
info: The Date.prototype has the property "getUTCMilliseconds"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "getUTCMilliseconds"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("getUTCMilliseconds"),
  true,
  'Date.prototype.hasOwnProperty("getUTCMilliseconds") must return true'
);
