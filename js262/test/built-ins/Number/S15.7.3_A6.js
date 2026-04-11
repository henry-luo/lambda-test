

/*---
info: The Number constructor has the property "POSITIVE_INFINITY"
es5id: 15.7.3_A6
description: Checking existence of the property "POSITIVE_INFINITY"
---*/
assert(
  Number.hasOwnProperty("POSITIVE_INFINITY"),
  'Number.hasOwnProperty("POSITIVE_INFINITY") must return true'
);
