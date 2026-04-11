

/*---
info: The Number prototype object has the property constructor
es5id: 15.7.4_A3.1
description: The test uses hasOwnProperty() method
---*/
assert.sameValue(
  Number.prototype.hasOwnProperty("constructor"),
  true,
  'Number.prototype.hasOwnProperty("constructor") must return true'
);
