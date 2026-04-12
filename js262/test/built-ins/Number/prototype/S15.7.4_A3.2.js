

/*---
info: The Number prototype object has the property toString
es5id: 15.7.4_A3.2
description: The test uses hasOwnProperty() method
---*/
assert.sameValue(
  Number.prototype.hasOwnProperty("toString"),
  true,
  'Number.prototype.hasOwnProperty("toString") must return true'
);
