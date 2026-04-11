

/*---
info: The Date.prototype has the property "setUTCMilliseconds"
esid: sec-properties-of-the-date-prototype-object
description: The Date.prototype has the property "setUTCMilliseconds"
---*/
assert.sameValue(
  Date.prototype.hasOwnProperty("setUTCMilliseconds"),
  true,
  'Date.prototype.hasOwnProperty("setUTCMilliseconds") must return true'
);
