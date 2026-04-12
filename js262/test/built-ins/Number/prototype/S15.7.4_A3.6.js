

/*---
info: The Number prototype object has the property toExponential
es5id: 15.7.4_A3.6
description: The test uses hasOwnProperty() method
---*/
assert.sameValue(
  Number.prototype.hasOwnProperty("toExponential"),
  true,
  'Number.prototype.hasOwnProperty("toExponential") must return true'
);
