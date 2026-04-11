

/*---
info: The Number prototype object has the property toPrecision
es5id: 15.7.4_A3.7
description: The test uses hasOwnProperty() method
---*/
assert.sameValue(
  Number.prototype.hasOwnProperty("toPrecision"),
  true,
  'Number.prototype.hasOwnProperty("toPrecision") must return true'
);
