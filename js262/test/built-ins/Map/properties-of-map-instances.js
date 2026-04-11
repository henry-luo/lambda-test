

/*---
es6id: 23.1.4
description: >
  Map instances are ordinary objects that inherit properties from the Map
  prototype.
---*/

assert.sameValue(
  Object.getPrototypeOf(new Map()),
  Map.prototype,
  '`Object.getPrototypeOf(new Map())` returns `Map.prototype`'
);
